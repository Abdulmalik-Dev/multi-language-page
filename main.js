// The Secions
let first = document.querySelector("#fr"),
  firstSpan = document.querySelector("#fr-span"),
  second = document.querySelector("#se"),
  secondSpan = document.querySelector("#se-span"),
  third = document.querySelector("#th"),
  thirdSpan = document.querySelector("#th-span"),
  footer = document.querySelector("#fo"),
  footerSpan = document.querySelector("#fo-span"),
  content = document.querySelector("#con"),
  contentSpan = document.querySelector("#con-span"),
  //   The Buttons
  ar = document.querySelector("#ar"),
  en = document.querySelector("#en");

//   Cofirm The Language To Arabic
ar.addEventListener("click", () => {
  first.textContent = "القسم الأول";
  firstSpan.textContent =
    "الأول كل ملفوظ مفهوم المعنى من الكتاب والسنة سواء كان ظاهرا أو نصا أو مفسرا حقيقة أو مجازا عاما أو خاصا اعتبارا منهم للغالب، لأن عامة ما ورد من صاحب الشرع نصوص، وهذا المعنى هو المراد بالنصوص في قولهم عبارة النص وإشارة النص ودلالة النص واقتضاء النص. فقوله من الكتاب والسنة بيان لقوله ملفوظ";
  second.textContent = "القسم الثاني";
  secondSpan.textContent =
    "الأول كل ملفوظ مفهوم المعنى من الكتاب والسنة سواء كان ظاهرا أو نصا أو مفسرا حقيقة أو مجازا عاما أو خاصا اعتبارا منهم للغالب، لأن عامة ما ورد من صاحب الشرع نصوص، وهذا المعنى هو المراد بالنصوص في قولهم عبارة النص وإشارة النص ودلالة النص واقتضاء النص. فقوله من الكتاب والسنة بيان لقوله ملفوظ";
  third.textContent = "القسم الثالث";
  thirdSpan.textContent =
    "الأول كل ملفوظ مفهوم المعنى من الكتاب والسنة سواء كان ظاهرا أو نصا أو مفسرا حقيقة أو مجازا عاما أو خاصا اعتبارا منهم للغالب، لأن عامة ما ورد من صاحب الشرع نصوص، وهذا المعنى هو المراد بالنصوص في قولهم عبارة النص وإشارة النص ودلالة النص واقتضاء النص. فقوله من الكتاب والسنة بيان لقوله ملفوظ";

  footer.textContent = "عنا";
  footerSpan.textContent =
    "الأول كل ملفوظ مفهوم المعنى من الكتاب والسنة سواء كان ظاهرا أو نصا أو مفسرا حقيقة أو مجازا عاما أو خاصا اعتبارا منهم للغالب، لأن عامة ما ورد من صاحب الشرع نصوص، وهذا المعنى هو المراد بالنصوص في قولهم عبارة النص وإشارة النص ودلالة النص واقتضاء النص. فقوله من الكتاب والسنة بيان لقوله ملفوظ";

  content.textContent = "تواصل معنا";
  contentSpan.textContent = "لا يوجد";
});
//   Cofirm The Language To English
en.addEventListener("click", () => {
  first.textContent = "First Section";
  firstSpan.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
      veritatis iure eius molestiae ipsa repellendus adipisci itaque, vero
      commodi aliquid eligendi omnis corrupti temporibus labore consectetur
      facere atque. Earum, odio!`;
  second.textContent = "Second Section";
  secondSpan.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
    veritatis iure eius molestiae ipsa repellendus adipisci itaque, vero
    commodi aliquid eligendi omnis corrupti temporibus labore consectetur
    facere atque. Earum, odio!`;
  third.textContent = "Third Section";
  thirdSpan.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
    veritatis iure eius molestiae ipsa repellendus adipisci itaque, vero
    commodi aliquid eligendi omnis corrupti temporibus labore consectetur
    facere atque. Earum, odio!`;

  footer.textContent = "About Us".toUpperCase();
  footerSpan.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum at
  possimus asperiores error beatae itaque laudantium repudiandae
  assumenda doloribus alias, optio, blanditiis libero perspiciatis
  ducimus, modi fugit mollitia voluptatem hic?`;

  content.textContent = "Containt Us".toUpperCase();
  contentSpan.textContent = `Not Exist`.toUpperCase();
});
