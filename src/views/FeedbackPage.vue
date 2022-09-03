<template>
  <!-- Feedback Header -->
  <div class="container">
    <!-- <img src="images/rocket.jpg" class="rocket"> -->
    <div class="launch__time">
      <div>
        <h6 id="days">00</h6>
        <strong>Days</strong>
      </div>

      <div>
        <h6 id="hours">00</h6>
        <strong>Hrs</strong>
      </div>

      <div>
        <h6 id="minutes">00</h6>
        <strong>Mins</strong>
      </div>

      <div>
        <h6 id="seconds">00</h6>
        <strong>Secs</strong>
      </div>
    </div>

    <div class="feedback__header" id="feedback-header">
      <div class="left__header">
        <h3><span id="feedbacks"> My Birthday</span> Feedbacks</h3>
      </div>

      <!-- Feedback Right-Header -->
      <div class="right__header">
        <button class="gifting__button" id="add-gifting-button">
          🤲🏽 Gifting
        </button>
        <button class="feedback__button" id="add-feedback-button">
          🖊️ Add Feedback
        </button>
      </div>
    </div>

    <!-- Feedback List -->
    <div class="feedback__list" id="feedback-list"></div>

    <!-- Adding a modal to add feedback -->
    <div class="modal" id="add-feedback-modal">
      <div class="modal__content">
        <div class="modal__header-left">
          <h1>Add Feedbacks & Wishes for your boy!</h1>
        </div>

        <div class="modal__body">
          <form id="add-feedback-form" class="form">
            <div class="form__group">
              <label for="name"> Your Name</label>
              <input type="text" name="name" id="name" class="form__input" />
            </div>
            <div class="form__group">
              <label for="title">Feedback & Wish Title</label>
              <input type="text" name="title" id="title" class="form__input" />
            </div>
            <div class="form__group">
              <label for="text">Feedback & Wish Detail</label>
              <textarea name="text" id="text" class="form__input"></textarea>
            </div>
          </form>
        </div>

        <div class="modal__footer">
          <button class="modal__button feedback__button" id="add-button">
            📝 Add feedback
          </button>
          <button
            class="modal__button feedback__button modal__button_cancel"
            id="cancel-button"
          >
            ❎ Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Adding Gifting section  -->

    <div class="gifting__modal" id="add-gifting-modal">
      <div class="gifting__content">
        <div class="modal__header-left">
          <h1>Account Name :</h1>
          <label for="name"> Iniubong Uko Udofot </label>
        </div>

        <div class="modal__header-left">
          <h1>Bank Name :</h1>
          <label> United Bank For Africa (UBA) </label>
        </div>

        <div class="modal__header-left">
          <h1>Account Number :</h1>
          <label> 2066238173 </label>
        </div>

        <div class="modal__header-left">
          <h1>Contact :</h1>
          <label> +234 802-498-3733 </label>
        </div>

        <div class="modal__header-left">
          <h1>Email :</h1>
          <label> iniubongudofot2000@gmail.com </label>
        </div>

        <div class="modal__footer">
          <button
            class="modal__button feedback__button modal__button_cancel"
            id="thank-you-button"
          >
            Thank You! ❤️
          </button>
        </div>
      </div>
    </div>

    <!-- Adding Appreciation Modal  -->

    <div class="appreciation__modal" id="add-appreciation-modal">
      <div class="modal__content">
        <div class="modal__header-left">
          <h2>Appreciation</h2>
          <label
            >Birthdays are one-day events, but your wishes will stay with me.
            Thank you very much!</label
          >
        </div>

        <div class="modal__footer">
          <button
            class="modal__button feedback__button modal__button_cancel"
            id="appreciation-cancel-button"
          >
            ❎ Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- FeedBack Appreciation Modal  -->

    <div
      class="feedback__appreciation__modal"
      id="add-feedback-appreciation-modal"
    >
      <div class="modal__content">
        <div class="modal__header-left">
          <h2>Appreciation</h2>
          <label
            >Birthdays are one-day events, but your wishes will stay with me.
            Thank you very much fam!</label
          >
        </div>

        <div class="modal__footer">
          <button
            class="modal__button feedback__button modal__button_cancel"
            id="feedback-appreciation-cancel-button"
          >
            ❎ Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Josefin Sans", sans-serif;
  background-color: #f7f8fd;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("../assets/images/cake3.jpg");
  overflow: auto;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  background-position-x: center;
  background-position-y: top;
}

.container {
  width: 700px;
}

.feedback__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(55, 63, 104) none repeat scroll 0% 0%;
  border-radius: 10px;
  padding: 20px;
}

h3 {
  font-size: 18px;
  line-height: 26px;
  color: white;
  font-weight: 700;
  letter-spacing: -0.25px;
}

.gifting__button {
  outline: none;
  display: inline;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgb(242, 244, 254);
  cursor: pointer;
  border: medium none;
  background: rgb(173, 31, 234) none repeat scroll 0% 0%;
  margin-right: 10px;
}

.gifting__button:hover {
  background: rgb(199, 90, 246) none repeat scroll 0% 0%;
  transform: translateX(0rem) translateY(-0.1rem);
}

.feedback__button {
  outline: none;
  display: inline;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgb(242, 244, 254);
  cursor: pointer;
  border: medium none;
  background: rgb(173, 31, 234) none repeat scroll 0% 0%;
}

.feedback__button:hover {
  background: rgb(199, 90, 246) none repeat scroll 0% 0%;
  transform: translateX(0rem) translateY(-0.1rem);
}

.feedback__item {
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease 0s;
  margin: 20px, 0;
  margin-top: 20px;
}

.item-animation {
  animation: slide-up 0.3s ease-in-out;
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal {
  display: none;
  position: fixed;
  top: 20%;
  left: 15%;
  width: 70%;
  height: 90%;
  overflow: auto;
}

.modal__content {
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  padding: 42px;
}

.gifting__modal {
  display: none;
  position: fixed;
  top: 5%;
  left: 10%;
  width: 70%;
  height: 90%;
  overflow: auto;
}

.gifting__content {
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  padding: 42px;
  position: fixed;
  overflow: auto;
}

.appreciation__modal {
  display: none;
  position: fixed;
  top: 20%;
  left: 15%;
  width: 70%;
  height: 90%;
  overflow: auto;
}

.feedback__appreciation__modal {
  display: none;
  position: fixed;
  top: 20%;
  left: 15%;
  width: 70%;
  height: 90%;
  overflow: auto;
}

h1 {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: rgb(58, 67, 116);
  padding-bottom: 26px;
  padding-top: 16px;
}

h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: rgb(58, 67, 116);
  padding-bottom: 26px;
  padding-top: 16px;
  text-align: center;
}

label {
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: rgb(35, 37, 54);
  padding-bottom: 26px;
  padding-top: 16px;
  text-align: center;
}

input {
  width: 100%;
  padding: 13px 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: rgb(58, 67, 116);
  background: rgb(225, 227, 236) none repeat scroll 0% 0%;
  border-radius: 5px;
  border: medium none;
}

textarea {
  width: 100%;
  resize: none;
  border: medium none;
  overflow: auto;
  outline: none;
  background: rgb(247, 248, 253);
  border-radius: 5px;
  height: 96px;
  padding: 24px;
  font-size: 15px;
  line-height: 22px;
  color: rgb(140, 146, 179);
  margin-bottom: 24px;
}

.modal__footer {
  display: flex;
  align-self: flex-end;
  gap: 16px;
}

.modal__button_cancel {
  color: rgb(242, 244, 254);
  background: rgb(101, 110, 163) none repeat scroll 0% 0%;
}

.launch__time {
  height: 30vh;

  display: flex;

  justify-content: center;
  font-size: 55px;

  margin-bottom: 20px;
  border-radius: 10px;
}

small {
  visibility: hidden;
  /* position: absolute; */
  bottom: 0;
  left: 0;
}

h6 {
  font-weight: 700;
  font-size: 70px;
  line-height: 0px;
  letter-spacing: -0.333333px;
  color: rgb(58, 67, 116);

  height: auto;
  text-align: center;
  margin-right: 80px;
  margin-top: 70px;
}

strong {
  font-weight: 700;
  font-size: 20px;
  line-height: 5px;
  letter-spacing: 5.333333px;
  color: rgb(57, 79, 88);
  text-align: center;
}

.rocket {
  width: 250px;
  position: absolute;
  right: 10%;
  bottom: 0;
  animation: rocket 4s linear infinite;
}

@keyframes rocket {
  0% {
    bottom: 0;
    opacity: 0;
  }
  100% {
    bottom: 105;
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) and (min-width: 400px) {
  .launch__time {
    width: 750px;
    height: 30vh;
    background-color: #f7f8fd;
    display: flex;

    justify-content: center;
    font-size: 55px;

    margin-bottom: 20px;
  }

  .feedback__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(55, 63, 104) none repeat scroll 0% 0%;
    border-radius: 10px;
    padding: 20px;
    width: 530px;
    margin-left: 85px;
  }

  .feedback__item {
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    border-radius: 10px;
    padding: 28px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease 0s;
    margin: 20px, 0;
    margin-top: 20px;
    width: 530px;
    margin-left: 85px;
  }
}
</style>
