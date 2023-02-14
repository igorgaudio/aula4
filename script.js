const posts = [
  {
    imag: "IMG/artigo 1 smatphones.jpeg",
    span: "07 de Fevereiro / Smartphones",
    title: "Metade da população mundial possui um smartphone ?",
    content:
      "Os últimos dez anos foram palco de grandes mudanças relacionadas\n" +
      "              ao acesso à informação. Um dos marcos, por exemplo, foi a migração\n" +
      "              dos celulares tradicionais para os smartphones, oferecendo ao\n" +
      "              usuário acesso à internet praticamente em qualquer lugar graças ao\n" +
      "              avanço gradual da cobertura de redes móveis pelo mundo.",
    readmore: "Leia Mais",
    href: "Artigo1.html",
  },
  {
    imag: "IMG/artigo 2 smartphone.jpeg",
    span: "07 de Fevereiro / Smartphones",
    title: "A venda de smartphones cai no mundo todo em 2022!",
    content:
      "Segundo dados recentes a venda de smartphones caiu no mundo\n" +
      "                  todo. A pandemia e outros fatores ajudaram a chegar neste\n" +
      "                  cenário.",
    readmore: "Leia Mais",
    href: "Artigo2.html",
  },
  {
    imag: "IMG/artigo3.jpeg",
    span: "07 de Fevereiro / Smartphones",
    title: "Coca-Cola pode lançar smartphone ainda neste ano!",
    content:
      "Que a Coca-Cola é uma das, se não a, maior empresa de bebidas de\n" +
      "              todo o mundo já não é surpresa para ninguém. Por exemplo, a\n" +
      "              palavra Coca-Cola foi avaliada como a segunda mais falada em todo\n" +
      "              o mundo, ficando atrás apenas da expressão “OK”.",
    readmore: "Leia Mais",
    href: "Artigo3.html",
  },
];
const wrapper = document.getElementById("blog");

for (var i = 0; i < posts.length; i++) {
  var postsdata = posts[i];

  const PostContainer = document.getElementById("blog-container");

  const Postbox = document.createElement("div");
  PostContainer.appendChild(Postbox);
  Postbox.className += "blog-box";

  const PostImg = document.createElement("div");
  Postbox.appendChild(PostImg);
  PostImg.className += "blog-img";

  const PostImgSrc = document.createElement("img");
  PostImgSrc.src = postsdata.imag;
  PostImg.appendChild(PostImgSrc);

  const PostText = document.createElement("div");
  Postbox.appendChild(PostText);
  PostText.className += " blog-text";

  const PostSpan = document.createElement("span");
  const PostSpanText = document.createTextNode(postsdata.span);
  PostText.appendChild(PostSpan);
  PostSpan.appendChild(PostSpanText);

  const PostTitle = document.createElement("a");
  const PostTitleText = document.createTextNode(postsdata.title);
  PostTitle.href = postsdata.href;
  PostTitle.className += "blog-title";
  PostTitle.appendChild(PostTitleText);
  PostText.appendChild(PostTitle);

  const PostP = document.createElement("p");
  const PostPtext = document.createTextNode(postsdata.content);
  PostP.appendChild(PostPtext);
  PostText.appendChild(PostP);

  const PostNewA = document.createElement("a");
  const PostNewAtext = document.createTextNode(postsdata.readmore);
  PostNewA.appendChild(PostNewAtext);
  PostText.appendChild(PostNewA);

  wrapper.appendChild(PostContainer);
}
