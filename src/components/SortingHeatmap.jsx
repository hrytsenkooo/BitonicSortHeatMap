import React, { useState } from "react";

const SortingHeatmap = () => {
  const [activeArraySize, setActiveArraySize] = useState(10000000);
  const [viewMode, setViewMode] = useState("time");

  const sequentialTimes = {
    100: 0.26,
    1000: 0.46,
    10000: 7.16,
    100000: 101.74,
    1000000: 1398.66,
    10000000: 18253.89,
  };

  const data = {
    100: [
      { threshold: 512, depth: 1, time: 1.9605 },
      { threshold: 512, depth: 2, time: 0.0894 },
      { threshold: 512, depth: 3, time: 0.0661 },
      { threshold: 512, depth: 4, time: 0.0609 },
      { threshold: 512, depth: 5, time: 0.0635 },
      { threshold: 512, depth: 6, time: 0.0605 },
      { threshold: 1024, depth: 1, time: 0.0598 },
      { threshold: 1024, depth: 2, time: 0.0663 },
      { threshold: 1024, depth: 3, time: 0.0642 },
      { threshold: 1024, depth: 4, time: 0.0599 },
      { threshold: 1024, depth: 5, time: 0.0586 },
      { threshold: 1024, depth: 6, time: 0.0581 },
      { threshold: 4096, depth: 1, time: 0.0686 },
      { threshold: 4096, depth: 2, time: 0.0668 },
      { threshold: 4096, depth: 3, time: 0.0573 },
      { threshold: 4096, depth: 4, time: 0.0627 },
      { threshold: 4096, depth: 5, time: 0.0607 },
      { threshold: 4096, depth: 6, time: 0.0601 },
      { threshold: 8192, depth: 1, time: 0.0699 },
      { threshold: 8192, depth: 2, time: 0.0618 },
      { threshold: 8192, depth: 3, time: 0.0611 },
      { threshold: 8192, depth: 4, time: 0.0626 },
      { threshold: 8192, depth: 5, time: 0.0583 },
      { threshold: 8192, depth: 6, time: 0.0604 },
      { threshold: 16384, depth: 1, time: 0.0594 },
      { threshold: 16384, depth: 2, time: 0.0579 },
      { threshold: 16384, depth: 3, time: 0.0595 },
      { threshold: 16384, depth: 4, time: 0.0622 },
      { threshold: 16384, depth: 5, time: 0.4041 },
      { threshold: 16384, depth: 6, time: 0.0461 },
    ],
    1000: [
      { threshold: 512, depth: 1, time: 6.1536 },
      { threshold: 512, depth: 2, time: 4.9182 },
      { threshold: 512, depth: 3, time: 0.4905 },
      { threshold: 512, depth: 4, time: 0.6404 },
      { threshold: 512, depth: 5, time: 0.4126 },
      { threshold: 512, depth: 6, time: 0.404 },
      { threshold: 1024, depth: 1, time: 0.8261 },
      { threshold: 1024, depth: 2, time: 0.7276 },
      { threshold: 1024, depth: 3, time: 0.8819 },
      { threshold: 1024, depth: 4, time: 0.7801 },
      { threshold: 1024, depth: 5, time: 0.8869 },
      { threshold: 1024, depth: 6, time: 0.7349 },
      { threshold: 4096, depth: 1, time: 0.8824 },
      { threshold: 4096, depth: 2, time: 0.7277 },
      { threshold: 4096, depth: 3, time: 0.8099 },
      { threshold: 4096, depth: 4, time: 0.6973 },
      { threshold: 4096, depth: 5, time: 0.8384 },
      { threshold: 4096, depth: 6, time: 0.697 },
      { threshold: 8192, depth: 1, time: 0.8023 },
      { threshold: 8192, depth: 2, time: 0.693 },
      { threshold: 8192, depth: 3, time: 0.7796 },
      { threshold: 8192, depth: 4, time: 1.3836 },
      { threshold: 8192, depth: 5, time: 0.8509 },
      { threshold: 8192, depth: 6, time: 0.7107 },
      { threshold: 16384, depth: 1, time: 0.7007 },
      { threshold: 16384, depth: 2, time: 0.8477 },
      { threshold: 16384, depth: 3, time: 0.7253 },
      { threshold: 16384, depth: 4, time: 0.8874 },
      { threshold: 16384, depth: 5, time: 0.8204 },
      { threshold: 16384, depth: 6, time: 0.8947 },
    ],
    10000: [
      { threshold: 512, depth: 1, time: 7.4312 },
      { threshold: 512, depth: 2, time: 5.8626 },
      { threshold: 512, depth: 3, time: 6.2804 },
      { threshold: 512, depth: 4, time: 5.9329 },
      { threshold: 512, depth: 5, time: 7.3101 },
      { threshold: 512, depth: 6, time: 6.0755 },
      { threshold: 1024, depth: 1, time: 7.0055 },
      { threshold: 1024, depth: 2, time: 5.8073 },
      { threshold: 1024, depth: 3, time: 5.9113 },
      { threshold: 1024, depth: 4, time: 5.8074 },
      { threshold: 1024, depth: 5, time: 5.8002 },
      { threshold: 1024, depth: 6, time: 5.6717 },
      { threshold: 4096, depth: 1, time: 7.7654 },
      { threshold: 4096, depth: 2, time: 9.3983 },
      { threshold: 4096, depth: 3, time: 7.2246 },
      { threshold: 4096, depth: 4, time: 5.0358 },
      { threshold: 4096, depth: 5, time: 6.3219 },
      { threshold: 4096, depth: 6, time: 6.2632 },
      { threshold: 8192, depth: 1, time: 6.8796 },
      { threshold: 8192, depth: 2, time: 7.9789 },
      { threshold: 8192, depth: 3, time: 7.0094 },
      { threshold: 8192, depth: 4, time: 7.9166 },
      { threshold: 8192, depth: 5, time: 6.9542 },
      { threshold: 8192, depth: 6, time: 8.2604 },
      { threshold: 16384, depth: 1, time: 11.571 },
      { threshold: 16384, depth: 2, time: 13.3811 },
      { threshold: 16384, depth: 3, time: 12.928 },
      { threshold: 16384, depth: 4, time: 12.4818 },
      { threshold: 16384, depth: 5, time: 11.9317 },
      { threshold: 16384, depth: 6, time: 12.3385 },
    ],
    100000: [
      { threshold: 512, depth: 1, time: 96.0464 },
      { threshold: 512, depth: 2, time: 69.295 },
      { threshold: 512, depth: 3, time: 62.9334 },
      { threshold: 512, depth: 4, time: 71.0284 },
      { threshold: 512, depth: 5, time: 68.1675 },
      { threshold: 512, depth: 6, time: 78.68 },
      { threshold: 1024, depth: 1, time: 100.8458 },
      { threshold: 1024, depth: 2, time: 69.7544 },
      { threshold: 1024, depth: 3, time: 65.8985 },
      { threshold: 1024, depth: 4, time: 63.1454 },
      { threshold: 1024, depth: 5, time: 63.6424 },
      { threshold: 1024, depth: 6, time: 82.0093 },
      { threshold: 4096, depth: 1, time: 97.3785 },
      { threshold: 4096, depth: 2, time: 70.1273 },
      { threshold: 4096, depth: 3, time: 56.5045 },
      { threshold: 4096, depth: 4, time: 64.4791 },
      { threshold: 4096, depth: 5, time: 64.5955 },
      { threshold: 4096, depth: 6, time: 66.5087 },
      { threshold: 8192, depth: 1, time: 98.4794 },
      { threshold: 8192, depth: 2, time: 67.59 },
      { threshold: 8192, depth: 3, time: 58.2922 },
      { threshold: 8192, depth: 4, time: 61.7562 },
      { threshold: 8192, depth: 5, time: 61.108 },
      { threshold: 8192, depth: 6, time: 61.3748 },
      { threshold: 16384, depth: 1, time: 93.4688 },
      { threshold: 16384, depth: 2, time: 68.3686 },
      { threshold: 16384, depth: 3, time: 58.36 },
      { threshold: 16384, depth: 4, time: 53.7215 },
      { threshold: 16384, depth: 5, time: 52.7769 },
      { threshold: 16384, depth: 6, time: 52.7064 },
    ],
    1000000: [
      { threshold: 512, depth: 1, time: 1256.3917 },
      { threshold: 512, depth: 2, time: 816.6432 },
      { threshold: 512, depth: 3, time: 693.2965 },
      { threshold: 512, depth: 4, time: 822.5037 },
      { threshold: 512, depth: 5, time: 1372.5611 },
      { threshold: 512, depth: 6, time: 994.1504 },
      { threshold: 1024, depth: 1, time: 1322.6173 },
      { threshold: 1024, depth: 2, time: 1298.2011 },
      { threshold: 1024, depth: 3, time: 934.5298 },
      { threshold: 1024, depth: 4, time: 1022.9952 },
      { threshold: 1024, depth: 5, time: 1409.8284 },
      { threshold: 1024, depth: 6, time: 1135.1407 },
      { threshold: 4096, depth: 1, time: 1852.406 },
      { threshold: 4096, depth: 2, time: 1290.3697 },
      { threshold: 4096, depth: 3, time: 976.2785 },
      { threshold: 4096, depth: 4, time: 1012.2095 },
      { threshold: 4096, depth: 5, time: 1427.0915 },
      { threshold: 4096, depth: 6, time: 1543.7177 },
      { threshold: 8192, depth: 1, time: 1842.0268 },
      { threshold: 8192, depth: 2, time: 1336.6335 },
      { threshold: 8192, depth: 3, time: 1056.6036 },
      { threshold: 8192, depth: 4, time: 1029.6241 },
      { threshold: 8192, depth: 5, time: 1431.6282 },
      { threshold: 8192, depth: 6, time: 1106.987 },
      { threshold: 16384, depth: 1, time: 1888.1924 },
      { threshold: 16384, depth: 2, time: 1358.3365 },
      { threshold: 16384, depth: 3, time: 1103.0995 },
      { threshold: 16384, depth: 4, time: 1029.9727 },
      { threshold: 16384, depth: 5, time: 1375.9885 },
      { threshold: 16384, depth: 6, time: 1474.1825 },
    ],
    10000000: [
      { threshold: 512, depth: 1, time: 23269.8598 },
      { threshold: 512, depth: 2, time: 14601.8043 },
      { threshold: 512, depth: 3, time: 11517.9888 },
      { threshold: 512, depth: 4, time: 12012.4299 },
      { threshold: 512, depth: 5, time: 17521.5375 },
      { threshold: 512, depth: 6, time: 24841.9076 },
      { threshold: 1024, depth: 1, time: 17816.0643 },
      { threshold: 1024, depth: 2, time: 10851.1157 },
      { threshold: 1024, depth: 3, time: 9357.0798 },
      { threshold: 1024, depth: 4, time: 10807.4103 },
      { threshold: 1024, depth: 5, time: 12863.5718 },
      { threshold: 1024, depth: 6, time: 26673.6092 },
      { threshold: 4096, depth: 1, time: 16865.3165 },
      { threshold: 4096, depth: 2, time: 10445.8294 },
      { threshold: 4096, depth: 3, time: 9071.3199 },
      { threshold: 4096, depth: 4, time: 10267.7474 },
      { threshold: 4096, depth: 5, time: 16625.5965 },
      { threshold: 4096, depth: 6, time: 13938.7499 },
      { threshold: 8192, depth: 1, time: 16404.0825 },
      { threshold: 8192, depth: 2, time: 10565.1778 },
      { threshold: 8192, depth: 3, time: 8907.0096 },
      { threshold: 8192, depth: 4, time: 10409.0698 },
      { threshold: 8192, depth: 5, time: 16399.8958 },
      { threshold: 8192, depth: 6, time: 23994.0796 },
      { threshold: 16384, depth: 1, time: 16537.3632 },
      { threshold: 16384, depth: 2, time: 10471.9641 },
      { threshold: 16384, depth: 3, time: 9080.1898 },
      { threshold: 16384, depth: 4, time: 10351.5176 },
      { threshold: 16384, depth: 5, time: 11327.958 },
      { threshold: 16384, depth: 6, time: 25315.5413 },
    ],
  };

  const getColorForTime = (time, minTime, maxTime) => {
    const normalizedValue = 1 - (time - minTime) / (maxTime - minTime);
    const hue = 120;
    const saturation = 90;
    const lightness = 15 + normalizedValue * 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const getColorForSpeedup = (speedup, minSpeedup, maxSpeedup) => {
    const normalizedValue = (speedup - minSpeedup) / (maxSpeedup - minSpeedup);
    const hue = 120;
    const saturation = 90;
    const lightness = 15 + normalizedValue * 70;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const currentData = data[activeArraySize];
  const sequentialTime = sequentialTimes[activeArraySize];

  const dataWithSpeedup = currentData.map((item) => ({
    ...item,
    speedup: sequentialTime / item.time,
  }));

  const minTime = Math.min(...currentData.map((item) => item.time));
  const maxTime = Math.max(...currentData.map((item) => item.time));

  const minSpeedup = Math.min(...dataWithSpeedup.map((item) => item.speedup));
  const maxSpeedup = Math.max(...dataWithSpeedup.map((item) => item.speedup));

  const thresholds = [512, 1024, 4096, 8192, 16384];
  const depths = [1, 2, 3, 4, 5, 6];

  const heatmapMatrix = thresholds.map((threshold) => {
    return depths.map((depth) => {
      const dataPoint = currentData.find(
        (item) => item.threshold === threshold && item.depth === depth
      );
      return dataPoint ? dataPoint.time : 0;
    });
  });

  const speedupMatrix = thresholds.map((threshold) => {
    return depths.map((depth) => {
      const dataPoint = dataWithSpeedup.find(
        (item) => item.threshold === threshold && item.depth === depth
      );
      return dataPoint ? dataPoint.speedup : 0;
    });
  });

  const getTextColorForTime = (colorIntensity) => {
    return colorIntensity > 0.6 ? "white" : "#2c3e50";
  };

  const getTextColorForSpeedup = (colorIntensity) => {
    return colorIntensity > 0.6 ? "#2c3e50" : "white";
  };

  const styles = {
    card: {
      width: "100%",
      maxWidth: "1200px",
      margin: "20px auto",
      border: "1px solid #2c3e50",
      borderRadius: "4px",
      backgroundColor: "#f8f9fa",
      fontFamily: 'Consolas, "Courier New", monospace',
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    cardHeader: {
      padding: "16px",
      textAlign: "center",
      borderBottom: "1px solid #2c3e50",
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
    },
    cardTitle: {
      fontSize: "20px",
      margin: "0",
      fontWeight: "500",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      margin: "16px 0 8px",
      flexWrap: "wrap",
    },
    button: {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "1px solid #2c3e50",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "bold",
      transition: "all 0.2s",
    },
    activeButton: {
      backgroundColor: "#27ae60",
      color: "white",
      borderColor: "#27ae60",
    },
    inactiveButton: {
      backgroundColor: "#ecf0f1",
      color: "#2c3e50",
    },
    viewModeButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      margin: "8px 0",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "16px 0",
      fontSize: "14px",
    },
    th: {
      padding: "10px",
      border: "1px solid #2c3e50",
      backgroundColor: "#34495e",
      color: "#ecf0f1",
      fontWeight: "500",
    },
    td: {
      padding: "12px",
      border: "1px solid #bdc3c7",
      textAlign: "center",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 0 8px rgba(0,0,0,0.2)",
        zIndex: 1,
      },
    },
    gradientContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px 0 10px",
    },
    gradientBar: {
      width: "350px",
      height: "20px",
      background:
        "linear-gradient(to right, hsl(120, 100%, 20%), hsl(120, 100%, 80%))",
      borderRadius: "4px",
      marginBottom: "8px",
    },
    gradientLabels: {
      display: "flex",
      justifyContent: "space-between",
      width: "350px",
      fontSize: "12px",
      color: "#2c3e50",
    },
    infoPanel: {
      backgroundColor: "#e8f4f8",
      borderLeft: "4px solid #3498db",
      padding: "12px",
      margin: "16px 0",
      fontSize: "14px",
      lineHeight: "1.5",
    },
    infoTitle: {
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#2c3e50",
    },
    footer: {
      textAlign: "center",
      padding: "15px",
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      borderRadius: "0 0 4px 4px",
      marginTop: "20px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>
          Аналіз продуктивності паралельного Bitonic Sort
        </h2>
        <div style={styles.buttonContainer}>
          {[100, 1000, 10000, 100000, 1000000, 10000000].map((size) => (
            <button
              key={size}
              onClick={() => setActiveArraySize(size)}
              style={{
                ...styles.button,
                ...(activeArraySize === size
                  ? styles.activeButton
                  : styles.inactiveButton),
              }}
            >
              {size.toLocaleString()} елементів
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={styles.infoPanel}>
          <div style={styles.infoTitle}>Пояснення параметрів:</div>
          <p>
            <strong>Threshold (поріг рекурсії)</strong> - мінімальний розмір
            підмасиву, який ще виконується паралельно.
          </p>
          <p>
            <strong>Depth (глибина рекурсії)</strong> - рівень вкладених
            рекурсивних викликів, при перевищенні якого алгоритм переходить у
            послідовний режим.
          </p>
        </div>

        <div style={styles.viewModeButtons}>
          <button
            onClick={() => setViewMode("time")}
            style={{
              ...styles.button,
              ...(viewMode === "time"
                ? styles.activeButton
                : styles.inactiveButton),
            }}
          >
            Час виконання (мс)
          </button>
          <button
            onClick={() => setViewMode("speedup")}
            style={{
              ...styles.button,
              ...(viewMode === "speedup"
                ? styles.activeButton
                : styles.inactiveButton),
            }}
          >
            Speed-up (відносно послідовного)
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Поріг \ Глибина</th>
                {depths.map((depth) => (
                  <th key={depth} style={styles.th}>
                    {depth}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {thresholds.map((threshold, rowIndex) => (
                <tr key={threshold}>
                  <td style={styles.th}>{threshold}</td>
                  {depths.map((depth, colIndex) => {
                    if (viewMode === "time") {
                      const time = heatmapMatrix[rowIndex][colIndex];
                      const colorIntensity =
                        (time - minTime) / (maxTime - minTime);
                      return (
                        <td
                          key={`${threshold}-${depth}`}
                          style={{
                            ...styles.td,
                            backgroundColor: getColorForTime(
                              time,
                              minTime,
                              maxTime
                            ),
                            color: getTextColorForTime(colorIntensity),
                            fontSize: "13px",
                          }}
                        >
                          {time.toFixed(2)} мс
                        </td>
                      );
                    } else {
                      const speedup = speedupMatrix[rowIndex][colIndex];
                      const colorIntensity =
                        (speedup - minSpeedup) / (maxSpeedup - minSpeedup);
                      return (
                        <td
                          key={`${threshold}-${depth}`}
                          style={{
                            ...styles.td,
                            backgroundColor: getColorForSpeedup(
                              speedup,
                              minSpeedup,
                              maxSpeedup
                            ),
                            color: getTextColorForSpeedup(colorIntensity),
                            fontSize: "13px",
                          }}
                        >
                          {speedup.toFixed(2)}x
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.gradientContainer}>
          <div style={styles.gradientBar}></div>
          <div style={styles.gradientLabels}>
            {viewMode === "time" ? (
              <>
                <span>Найгірший час: {maxTime.toFixed(2)} мс</span>
                <span>Найкращий час: {minTime.toFixed(2)} мс</span>
              </>
            ) : (
              <>
                <span>Найменший speed-up: {minSpeedup.toFixed(2)}x</span>
                <span>Найбільший speed-up: {maxSpeedup.toFixed(2)}x</span>
              </>
            )}
          </div>
        </div>
      </div>
      <footer style={styles.footer}>Створено ІП-21 Гриценком Артемом</footer>
    </div>
  );
};

export default SortingHeatmap;
