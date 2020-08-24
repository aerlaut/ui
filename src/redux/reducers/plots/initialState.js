const embeddingCategoricalInitialConfig = {
  width: 700,
  height: 550,
  pointSize: 5,
  toggleInvert: '#FFFFFF',
  masterColour: '#000000',
  umap1Domain: null,
  umap2Domain: null,
  titleText: '',
  titleSize: 20,
  titleAnchor: 'start',
  axisTitlesize: 13,
  axisTicks: 13,
  transGrid: 0,
  axesOffset: 10,
  masterFont: 'sans-serif',
  xaxisText: 'UMAP 1',
  yaxisText: 'UMAP 2',
  pointStyle: 'circle',
  pointOpa: 5,
  g1Color: 'red',
  g2mColor: 'green',
  sColor: 'blue',
  legendTextColor: '#FFFFFF',
  legendEnabled: true,
  legend: null,
  geneexpLegendloc: '',
  labelSize: 28,
  labelShow: 1,
  labelFont: 2,
  labelsEnabled: true,
  selectedClusters: [],
  testVar: null,
};

const initialState = {
  // embeddingCategoricalMain is plotUuid
  embeddingCategoricalMain: {
    type: 'embeddingCategorical',
    config: embeddingCategoricalInitialConfig,
  },
};

export default initialState;