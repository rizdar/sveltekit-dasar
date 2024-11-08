import { error } from "@sveltejs/kit";

export async function load({ params }) {
  // ceritanya data dari data base
  const posts = [
    {
      id: 1,
      title: "Javascript bahasa pemrogaman yang keren",
      content: "Loremyydyadyoiaydiayodyaodyoaydoaydoayodyaodyoa",
    },
    {
      id: 2,
      title: "React, Vue, Angular or Svelte",
      content: "Loremyydyadyoiaydiayodyaodyoaydoaydoayodyaodyoa",
    },
    {
      id: 3,
      title: "TailwindCSS is COOL",
      content: "Loremyydyadyoiaydiayodyaodyoaydoaydoayodyaodyoa",
    },
  ];

  if (posts.length > 0) {
    return {
      data: posts,
    };
  }

  error(404, "Not Found");
}
