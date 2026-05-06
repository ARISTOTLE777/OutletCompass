export default function filterOutlets(malls, query, category) {
  const results = [];

  const searchQuery = query.toLowerCase();

  malls.forEach((mall) => {
    mall.outlets.forEach((outlet) => {
      let matchesQuery = true;
      let matchesCategory = true;

      // Query filter
      if (searchQuery !== "") {
        const combinedFields = `
          ${outlet.name}
          ${outlet.category}
          ${outlet.subcategory}
          ${outlet.tags.join(" ")}
        `.toLowerCase();

        matchesQuery = combinedFields.includes(searchQuery);
      }

      // Category filter
      if (category !== "All") {
        matchesCategory = outlet.category === category;
      }

      //If both conditions match, include outlet
      if (matchesQuery && matchesCategory) {
        results.push({
          ...outlet,
          mallName: mall.name,
          mallId: mall.id,
        });
      }
    });
  });

  return results;
}
