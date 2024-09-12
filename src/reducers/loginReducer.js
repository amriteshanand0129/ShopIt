export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: payload.token,
      };
      case "LOGOUT":
        return {
            ...state,
            email: "",
            password: "",
            token: ""
        }
    default:
      return state;
  }
};
