// Import the inctance
import API from "../../../api";

export const generate = async (category) => {
  // Generate function
  // Args:
  // - Category: String

  try {
    // Create the response
    const response = await API.get(`quotes`, {
      // Set query strings
      params: {
        category,
      },
    });

    // Return data
    return Promise.resolve(response.data);
  } catch (error) {
    // Return error
    return Promise.reject(error.response.data);
  }
};
