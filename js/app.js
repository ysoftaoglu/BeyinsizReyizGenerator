var canvas = document.getElementById('app__canvas');
var ctx = canvas.getContext('2d');
var downloadButton = document.getElementsByClassName('app__button--download')[0];
var generateButton = document.getElementsByClassName('app__button--generate')[0];

// Position Options
var posOption = {
  text: {
    x: 275,
    y: 25
  },
  guru: {
    x: 125,
    y: 395,
  },
  master: {
    x: 375,
    y: 200
  },
  normal: {
    x: 125,
    y: 180
  },
  beyinsiz: {
    x: 390,
    y: 390
  }
}

// Canvas  Styling
ctx.font = "14px Arial";
ctx.textAlign = "center";
ctx.fillStyle = '#000';

// New Image
var image = new Image();
image.src = 'http://localhost:3000/a/img/beyinsiz.jpg';

// Image Loaded
image.onload = function () {
  drawImage("Hangi şampuanı kullanıyorsunuz", "Dostum saçım yok dedim", "Dostum dalga mı geçiyorsun lanet olsun", "Dostum lanet olsun soru mu bu", "Hed en soldırs yine sasırdınız mk kelleri :d");
};

// Image caption with new line feature
function writeText(content, xPos, yPos, maxWidth, newLine) {
  var words = content.split(' ');
  var line = '';
  for (var n = 0; n < words.length; n++) {
    var checkLine = line + words[n] + ' ';
    var mWidth = ctx.measureText(checkLine);
    var testWidth = mWidth.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, xPos, yPos);
      ctx.strokeText(line, xPos, yPos);
      line = words[n] + ' ';
      yPos += newLine;
    }
    else {
      line = checkLine;
    }
  }
  ctx.fillText(line, xPos, yPos);
  ctx.strokeText(line, xPos, yPos);
}

// Draw Function
function drawImage(text, guru, master, normal, beyinsiz) {
  ctx.drawImage(image, 0, 0, 550, 450);
  writeText(text, posOption.text.x, posOption.text.y, 500, 20);
  writeText(guru, posOption.guru.x, posOption.guru.y, 250, 20);
  writeText(master, posOption.master.x, posOption.master.y, 250, 20);
  writeText(normal, posOption.normal.x, posOption.normal.y, 250, 20);
  writeText(beyinsiz, posOption.beyinsiz.x, posOption.beyinsiz.y, 250, 20);
}

// Events
generateButton.addEventListener('click', function() {
  var content = {
    text: document.getElementById('text').value,
    guru: document.getElementById('guru').value,
    master: document.getElementById('master').value,
    normal: document.getElementById('normal').value,
    beyinsiz: document.getElementById('beyinsiz').value
  };
  drawImage(content.text, content.guru, content.master, content.normal, content.beyinsiz);
});

downloadButton.addEventListener('click', function(e) {
  var download = document.getElementById("download");
  download.href = canvas.toDataURL();
  download.download = "beyinsiz.png";
});