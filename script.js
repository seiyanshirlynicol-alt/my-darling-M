/* =========================
   MUSIC PLAY BUTTON
========================= */
const song = document.getElementById('birthdaySong');
const toggleBtn = document.getElementById('musicToggle');

toggleBtn.addEventListener('click', () => {
  song.play();
  toggleBtn.style.display = 'none';
});

/* =========================
   LETTER MODAL LOGIC
========================= */
const letters = document.querySelectorAll('.letter');
const modal = document.getElementById('letterModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

const letterTitles = [
  "It's Your Birthday😍",
  "I Love You💗",
  "My Prayer for You❤",
  "A Poem for You💌",
  "Always Remember💕"
];

const letterContents = [

`Heyy baby, it's your birthday.

On this day, I get to celebrate you coming into this world.
You are a gift ,one I didn’t think I would be entrusted with, but I have .
And I am grateful. 
I am honored to be a woman you love.

You are precious to me.
You make me happy, and I desire to always be with you 
to laugh with you, dance with you, grow with you, cry with you,
argue with you, and build with you.

Walking this journey of life with you is a privilege.
I haven’t been a part of the past 21 years,
but I am hoping to be a part of the years ahead 
to see you grow and become who God made you to be.

I love you so much.
Happy birthday, my love.`,

heyy , me again(niwachie number angalau)

I love how you look.
I love your smile.
I love your eyes.
I love your mind.
I love your body.
I love your heart.
I love your voice.
I love your touch.
And I love your presence.

I am learning to love who you have been for the past 21 years,
and I will continue to love who you are becoming.

You are one of the smartest people I know,
and I truly admire that about you.
Your passion and the way you pursue what you love is beautiful.
I want nothing more than to see you succeed.

I am in love with you, baby.`,

`Firstly, I thank God for keeping and preserving you for the past years.

I pray that this coming year you will have peace.
I pray that you will have joy.
I pray that you will have success.

I pray that your life will be filled with happiness and love.
I pray that love will surround you wherever you go.
I pray that you will learn to see yourself the way God sees you.
I pray that you will learn to love God and love others.

I pray that you will succeed in every endeavor you choose to begin.
I pray that you will see the goodness and faithfulness of God in this land of the living.
I pray for strength through every season.
I pray that you will grow in understanding and intimacy with God.
I pray that you will walk boldly in your purpose.

I pray that you will be protected in your going and coming.
I pray that your life will be filled with favor and blessing.
I pray that I will know how to love you well.
I pray that the people around you will love you and support you.

I pray that this year will be one of the best you have ever lived 
and that even greater years are still ahead.
I pray that you will be a light in every room you enter.
I pray that your mind will be renewed and transformed.
I pray that you will heal from anything that has hurt you.
I pray that you will unlearn every negative pattern planted by the enemy.

May the Lord keep you and shine His face upon you.
In Jesus’ name, Amen.`,

`My darling M,

To begin with, I love you , 
ik ive said this so many times in all this letters, but its bacause
i love you in ways my words can barely hold 
in prayers, in smiles, in days that are untold.

I love you when the world is loud.
I love you when it is quiet.
You are a place I find peace,
and a place that gives me strength on heavy days.
a vessel God uses to show up for me.

From the very start, this remains true:
to begin with and always, I love you.

I love you as the days grow,
in learning hearts and patient ways,
in every dream we dare to keep,
and in the promises we softly make.

Through highs and lows and changing seasons,
I hope to love you even more.
When life feels close or unfamiliar,
my choice will always be you.

I choose to walk with you.
We may not have forever,
but with every chance I get,
I will love you.`,

`My handsome, beautiful, fine man,

You are loved.
You are enough.
You are chosen.
You are capable.
You are deserving , because He made you deserving.

Walk into every room boldly.
Live life fully.
Make good choices, but also take risks (the good kind).
Remember to rest.
Remember to have fun.

It is okay to make mistakes 
just remember to learn from them.
You are smart.
You can do anything you set your mind to.

You matter.
Your presence has impact.
I am proud of you.
You are never alone.

It is okay to be scared.
It is okay to feel hurt.
It is okay to start again.

You are amazing.
You are destined for greatness 
on both sides of eternity.
You are the light of the world.

Always remember:
I love youuu.`
];

letters.forEach((letter, index) => {
  letter.addEventListener('click', () => {
    modalTitle.textContent = letterTitles[index];
    modalText.textContent = letterContents[index];
    modal.style.display = "block";
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


