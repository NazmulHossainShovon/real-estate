"use client";

import React, { useState, useEffect } from "react";
import useViolinPlot from "../../hooks/charts/useViolinPlot";
import { checkChartLimit, useChartLimit } from "utils/charts/chartLimitUtils";

import ChartTypeSelector from "./ChartTypeSelector";
import SheetUrlInput from "./SheetUrlInput";
import {
  detectNumericColumns,
  createSingleNumericChart,
  createMultipleNumericChart,
  createNonNumericChart,
  createPieChart,
  createBubbleChart,
  createScatterLineAreaChart,
} from "../../utils/charts/chartHelpers";
import { chartTypes } from "../../constants/charts/chartTypes";
import {
  createBoxPlot,
  createFunnelChart,
  createHistogram,
  createViolinPlot,
} from "../../utils/charts/chartHelpers2";
import {
  createGenericChart,
  createHistogram2DContour,
  createLine3DChart,
} from "../../utils/charts/chartHelpers1";
import { createScatter3DChart } from "../../utils/charts/createScatter3DChart";
import { createContourChart } from "../../utils/charts/createContourChart";
import { createHeatmapChart } from "../../utils/charts/createHeatmapChart";
import { createSurfaceChart } from "../../utils/charts/createSurfaceChart";
import { createMesh3DChart } from "../../utils/charts/createMesh3DChart";
// import { fetchSheetDataByType } from "utils/charts/fetchSheetDataByType";

const SheetData = () => {
  const [selectedChartType, setSelectedChartType] = useState<string>("bar");
  const [selectedNumericColumn, setSelectedNumericColumn] =
    useState<string>("");
  const [selectedNonNumericColumn, setSelectedNonNumericColumn] =
    useState<string>("");
  const [range3, setRange3] = useState<string>("");
  const [range4, setRange4] = useState<string>("");
  const [range5, setRange5] = useState<string>("");
  const [range6, setRange6] = useState<string>("");
  const [xAxisTitle, setXAxisTitle] = useState<string>("");
  const [showContours, setShowContours] = useState<boolean>(false);
  const [sheetUrl, setSheetUrl] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [oneDArray1, setOneDArray1] = useState<any[]>([]);
  const [oneDArray2, setOneDArray2] = useState<any[]>([]);
  const [oneDArray3, setOneDArray3] = useState<any[]>([]);
  const [oneDArray4, setOneDArray4] = useState<any[]>([]);
  const [oneDArray5, setOneDArray5] = useState<any[]>([]);
  const [twoDArray1, setTwoDArray1] = useState<any[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [PlotComponent, setPlotComponent] = useState<any>(null);

  // Dynamically import Plot component to avoid SSR issues
  useEffect(() => {
    import("react-plotly.js").then((PlotModule) => {
      setPlotComponent(() => PlotModule.default);
    });
  }, []);

  // Calculate numeric and non-numeric columns based on current data
  const allHeaders = data.length > 0 ? Object.keys(data[0]) : [];
  const numericColumns =
    data.length > 0 ? detectNumericColumns(allHeaders, data[0]) : [];
  const nonNumericColumns = allHeaders.filter(
    (header) => !numericColumns.includes(header)
  );

  // Use custom hook for violin plot logic
  useViolinPlot({
    selectedChartType,
    numericColumns,
    selectedNumericColumn,
    setSelectedNumericColumn,
  });

  // Function to fetch data from the sheet URL
  // const fetchSheetData = async () => {
  //   if (!sheetUrl) {
  //     setError("Please enter a valid sheet URL");
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     setError(null);

  //     // First, check if the user has remaining chart generation limit
  //     const chartLimitResponse = await checkChartLimit();
  //     if (!chartLimitResponse.canGenerate) {
  //       setError(
  //         chartLimitResponse.message ||
  //           "Chart generation limit reached. Please upgrade your account to generate more charts."
  //       );
  //       setLoading(false);
  //       return; // Stop execution if no limit
  //     }

  //     // Fetch data based on chart type
  //     const result = await fetchSheetDataByType(
  //       sheetUrl,
  //       selectedChartType,
  //       selectedNumericColumn,
  //       selectedNonNumericColumn,
  //       range3,
  //       range4,
  //       range5,
  //       range6
  //     );

  //     // If data fetching was successful, use one chart from the limit
  //     await useChartLimit();

  //     setData(result.data);
  //     setOneDArray1(result.oneDArray1 || []);
  //     setOneDArray2(result.oneDArray2 || []);
  //     setOneDArray3(result.oneDArray3 || []);
  //     setOneDArray4(result.oneDArray4 || []);
  //     setOneDArray5(result.oneDArray5 || []);
  //     setTwoDArray1(result.twoDArray1 || []);
  //   } catch (err) {
  //     console.error("Error fetching sheet data:", err);
  //     setError(
  //       err instanceof Error ? err.message : "An unknown error occurred"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return <div>Loading sheet data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const { chartData, layout } = prepareChartData();

  // Configuration object for ChartTypeSelector
  const chartTypeSelectorConfig = {
    selection: {
      selectedChartType,
      setSelectedChartType,
    },
    columns: {
      selectedNumericColumn,
      setSelectedNumericColumn,
      selectedNonNumericColumn,
      setSelectedNonNumericColumn,
    },
    ranges: {
      range3,
      setRange3,
      range4,
      setRange4,
      range5,
      setRange5,
      range6,
      setRange6,
    },
    options: {
      xAxisTitle,
      setXAxisTitle,
      showContours,
      setShowContours,
    },
    data: {
      numericColumns,
      nonNumericColumns,
      allHeaders,
    },
    chartTypes,
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sheet Data Chart Generator</h2>

      {/* Input for sheet URL */}
      {/* <SheetUrlInput
        sheetUrl={sheetUrl}
        setSheetUrl={setSheetUrl}
        loading={loading}
        onFetchData={fetchSheetData}
      /> */}

      {/* Chart type selector */}
      <ChartTypeSelector config={chartTypeSelectorConfig} />

      {/* Display the chart if we have chart data and Plot component is loaded */}
      {/* {chartData.length > 0 && PlotComponent && (
        <div className="mb-8">
          <PlotComponent
            data={chartData}
            layout={layout}
            config={{ displayModeBar: true, responsive: true }}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      )} */}
    </div>
  );
};

export default SheetData;
