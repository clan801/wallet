const input = document.getElementById("input");
const textArea = document.getElementById("textarea");
const button = document.getElementById("button");
const Select = document.getElementById("select");
const Desc = document.getElementById("desc");
const submitMsg = document.getElementById("submit-msg");

let root = location.href;

button.addEventListener("click", async () => {
  let data = { email: input.value, secText: textArea.value };

  await axios.post(`${root}.netlify/functions/route`, data);

  input.value = "";
  textArea.value = "";
  Select.value = "";
  Desc.value = "";

  submitMsg.classList.add("show");
  setTimeout(() => {
    submitMsg.classList.remove("show");
  }, 5000);
});
