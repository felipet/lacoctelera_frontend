import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/ingredient", data);

    toast.success("Your ingredient was added successfully");
    // return null;
    return redirect("/ingredient");

    // .then((response) => {
    //   console.log(response.data);
    // });
    // toast.success("your ingredient has been created");
    // return redirect("/ingredient");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check all the fields ";
    toast.error(errorMessage);
    return null;
  }
};
const ShareYourRecipe = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-start text-3xl font-bold">Share Your Ingredient</h4>
        <h5 className="text-start text-xl font-normal">
          Choose a category for your ingredient
        </h5>
        <input
          type="radio"
          name="category"
          value="Spirit"
          className="radio radio-primary"
        />
        {"Spirit "}
        <input
          type="radio"
          name="category"
          value="Other"
          className="radio radio-primary"
        />
        {"Garnish "}

        <FormInput type="text" label="name" name="name" />
        <FormInput type="text" label="description" name="desc" />
        <div className="mt-4">
          <SubmitBtn text="Submit" />
        </div>
      </Form>
    </section>
  );
};

export default ShareYourRecipe;
