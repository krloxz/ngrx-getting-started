export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'MASK_USER_NAME': {
      return {
        ...state,
        maskUserName: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
