import { fail } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    // TODO log the user in
    const data = request.formData();
    const email = (await data).get("email");
    const password = (await data).get("password");

    if (!email) {
      return fail(400, { email, mising: true });
    }

    if (password === "" || password === null) {
      return fail(400, { password, incorrect: true });
    }

    return { status: "ok" };
  },
};
