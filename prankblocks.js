class prankblocks {
  getInfo() {
    return {
      id: 'prankblocks',
      name: 'Prank blocks',
      color1: '#000000',
      color2: '#000000',
      color3: '#000000',
      docsURI: 'https://github.com/pizzadog-yummy/prank-blocks/tree/main?tab=readme-ov-file#prank-blocks',
      blockIconURI:
      'https://em-content.zobj.net/source/google/313/rolling-on-the-floor-laughing_1f923.png',
      blocks: [
        {
          opcode: 'wipepage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Wipe page',
        },
        {
          opcode: 'hangpage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Hang page',
        },
        {
          opcode: 'alerthang',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Alert hang page with message [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ligma'
            }
          }
        },
        {
          opcode: 'rickroll',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Rickroll user'
        },
        {
          opcode: 'wipestorage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Wipe localstorage'
        },
        {
          opcode: 'jumpscare',
          blockType: Scratch.BlockType.COMMAND,
          text: 'jumpscare'
        },
        {
          opcode: 'comic',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Comic sans'
        },
        {
          opcode: 'flashbang',
          blockType: Scratch.BlockType.COMMAND,
          text: 'MY EYES'
        },
        {
          opcode: 'unsave',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Unsave page'
        },
        {
          opcode: 'poop',
          blockType: Scratch.BlockType.COMMAND,
          text: 'poop',
          color1: '#78470e',
          color2: '#78470e',
          color3: '#78470e',
          blockIconURI: 'https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/1f4a9.png'
        }
      ]
    };
  }
  wipepage(args) {
    document.head.innerHTML = ''
    document.body.innerHTML = '';
  };
  hangpage(args) {
    while (true) 69;
  };
  alerthang(args) {
    while (true) alert(args.TEXT);
  };
  rickroll(args) {
    document.head.innerHTML = ''
    document.body.innerHTML = `<style>*{margin:0;padding:0;height:100%}img{display:block;width:100%;height:100%;object-fit:contain;max-width:100vw;max-height:100vh</style><img src="https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif"></img>`;
  };
  wipestorage(args) {
    localStorage.clear();
  };
  jumpscare(args) {
    const existingGif = document.getElementById('gifAnimation');
    const existingAudio = document.getElementById('audioTrack');
    if (existingGif) existingGif.remove();
    if (existingAudio) existingAudio.remove();
    
    const gif = document.createElement('img');
    gif.src = 'https://s12.gifyu.com/images/SDkH3.gif?'+ new Date().getTime(); 
    gif.alt = 'Background Animation';
    gif.style.position = 'absolute';
    gif.style.top = '50%';
    gif.style.left = '50%';
    gif.style.transform = 'translate(-50%, -50%)';
    gif.style.width = '100%';
    gif.style.height = '100%';
    gif.style.objectFit = 'cover';
    gif.style.zIndex = '9999'; 
    gif.id = 'gifAnimation';
    gif.draggable = false;

    const audio = document.createElement('audio');
    audio.src = 'https://audio.jukehost.co.uk/o788lnqMbcYa040oKK4EMUJ4QZXEmQBK';
    audio.autoplay = true;
    audio.id = 'audioTrack';

    document.body.appendChild(gif);
    document.body.appendChild(audio);

    setTimeout(() => {
        gif.remove(); 
        audio.remove(); 
    }, 1000); 
  }
  poop(args) {
    const style = document.createElement('style');
    style.textContent = `* { color: #78470e !important; background-color: #78470e !important; }`;
    document.head.appendChild(style);
  };
  comic(args) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Comic+Neue';
    const style = document.createElement('style');
    style.textContent = `* { font-family: Comic Neue !important; }`;
    document.head.appendChild(link);
    document.head.appendChild(style);
  };
  flashbang() {
    const flashDiv = document.createElement('div');
    flashDiv.style.position = 'fixed';
    flashDiv.style.top = '0';
    flashDiv.style.left = '0';
    flashDiv.style.width = '100%';
    flashDiv.style.height = '100%';
    flashDiv.style.backgroundColor = 'white'; 
    flashDiv.style.zIndex = '9999'; 
    flashDiv.style.opacity = '1'; 
    flashDiv.style.transition = 'opacity 0.8s ease-out'; 

    document.body.appendChild(flashDiv);

    setTimeout(() => {
        flashDiv.style.opacity = '0'; 
    }, 50); 
    
    setTimeout(() => {
        document.body.removeChild(flashDiv);
    }, 850); 
  };
  unsave(args) {
    window.onbeforeunload = function() {
      return "Changes not saved";
    };
  };

}
Scratch.extensions.register(new prankblocks());
