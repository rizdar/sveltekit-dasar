import { error } from "@sveltejs/kit";

export function load({ params, data }) {
  if (params.slug === "hello-world") {
    return {
      title: "hello world",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
    };
  }

  error(404, "Not found");
}
