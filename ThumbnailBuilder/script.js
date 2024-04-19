const createCard = (imgUrl, title, channelName, views, howOld, duration) => {
  let finalViews;
  if (views < 1000000) {
    finalViews = views / 1000 + "K";
  } else if (views == 1000000 || views > 1000000) {
    finalViews = views / 1000000 + "M";
  }

  let html = `

  <div class="box"><div class="image">
  <img src="${imgUrl}"/>

  <div class="duration">${duration}</div>
  </div>

<div class="text">
  <h1>${title}</h1>
  <p>
  ${channelName} . ${finalViews} views . ${howOld} months old
  </p>
</div></div>
  `;

  document.querySelector(".container").insertAdjacentHTML("beforeend", html);
};

createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "Introduction to the web builder | Tutorial #1",
  "CodeWithHarry",
  1500000,
  6,
  "31:22"
);
createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "Introduction to the web builder | Tutorial #1",
  "CodeWithHarry",
  150000,
  6,
  "31:22"
);
createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "Introduction to the web builder | Tutorial #1",
  "CodeWithHarry",
  150000,
  6,
  "45:22"
);

createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "Introduction to the web builder | Tutorial #1",
  "CodeWithHarry",
  150000,
  6,
  "45:22"
);

createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "Introduction to the web builder | Tutorial #1",
  "CodeWithHarry",
  150000,
  6,
  "45:22"
);
