// import axios from "axios";
// const BaseUrl = "https://api.escuelajs.co/api/v1";

export const getAllCategories = async () => {
  // const url = `${BaseUrl}/categories`;

  try {
    // const { data } = await axios.get(url);
    // const categories = data.slice(0, 5).map(category => category.name) "All", "Shoes", "Groceries", "Electronics", "Miscellaneous"
    const categories = [
      {
        id: 0,
        name: "All",
      },
      {
        id: 1,
        name: "Clothes",
      },
      {
        id: 2,
        name: "Electronics",
      },
      {
        id: 3,
        name: "Furniture",
      },
      {
        id: 4,
        name: "Shoes",
      },
      {
        id: 5,
        name: "Miscellaneous",
      },
    ];
    return categories;
  } catch (err) {
    return err;
  }
};
