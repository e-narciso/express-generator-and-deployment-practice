document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

const deleteThis = color => {
  console.log(color.innerText);

  axios
    .delete("/delete-color", {data: {color: color.innerText} })
    .then(deletedColor => {
      color.remove();
      console.log(deletedColor);
    })
    .catch(err => {
      console.error(err);
      alert('Please log in before deleting our colors...');
      window.location.href = '/';
    });
};
