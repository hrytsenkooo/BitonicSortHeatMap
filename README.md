# Bitonic Sort Parallel Performance Analysis

This project visualizes the performance of a parallel Bitonic Sort algorithm using a heatmap in my course work. It compares different combinations of recursion thresholds and depths to identify optimal parallelization parameters.

## Key Features

- Interactive heatmap visualization of sorting performance
- Comparison of execution time vs speedup for different array sizes (100 to 10M elements)
- Analysis of two key parameters:
  - **Threshold**: minimum subarray size for parallel execution
  - **Depth**: recursion level limit before switching to sequential mode

## Results

The visualization helps identify the optimal threshold/depth combinations that maximize speedup while minimizing execution time for parallel Bitonic Sort.

**[Link on website](https://bitonic-sort-heatmap.netlify.app/)**
