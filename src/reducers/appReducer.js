const initialState = [];

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPLICATION":
      // console.log([
      //   ...state,
      //   {
      //     appName: action.payload.appName,
      //     languageList: action.payload.languageList,
      //   },
      // ]);
      return [
        ...state,
        {
          appName: action.payload.appName,
          languageList: action.payload.languageList,
        },
      ];
    default:
      return state;
  }
};
