// import PhotoSearch from "./unsplash";
// class SimpleImage {
//   constructor({ data, api }) {
//     // this.data = data;

//     this.data = {
//       url: data.url || "",
//       caption: data.caption || "",
//       withBorder: data.withBorder !== undefined ? data.withBorder : false,
//       withBackground:
//         data.withBackground !== undefined ? data.withBackground : false,
//       stretched: data.stretched !== undefined ? data.stretched : false,
//     };

//     this.wrapper = undefined;
//     this.addImg = undefined;
//     this.settings = [
//       {
//         name: "withBorder",
//         icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`,
//       },
//       {
//         name: "stretched",
//         icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`,
//       },
//       {
//         name: "withBackground",
//         icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>`,
//       },
//     ];

//     this.api = api;
//   }

//   static get toolbox() {
//     return {
//       title: "Image",
//       icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
//     };
//   }

//   render() {
//     this.addImg = document.createElement("div");
//     this.addImg.classList.add("img-box");

//     this.wrapper = document.createElement("div");

//     this.wrapper.classList.add("simple-image");

//     if (this.data && this.data.url) {
//       this._createImage(this.data.url, this.data.caption);
//       return this.wrapper;
//     }   /* need to add this functionality */

//     // const input = document.createElement("input"); // clicking on the image tool in the toolbox will make visible the input
//     // input.placeholder = "Paste an image URL...";
//     // input.value = this.data && this.data.url ? this.data.url : "";
//     // this.wrapper.appendChild(input);

//     // input.addEventListener("paste", (event) => {
//     //   this._createImage(event.clipboardData.getData("text"));
//     // });

//     // const uploadBtn = document.createElement("button");
//     // uploadBtn.innerHTML = "Upload";
//     // uploadBtn.classList.add("uploadBtn");

//     const uploadIcons = document.createElement("div");
//     uploadIcons.classList.add("upload-icons");

//     const embedImgIcon = document.createElement("div");
//     embedImgIcon.innerHTML = "Embed Link";
//     embedImgIcon.classList.add("embedImg-icon");

//     // const embedImg = document.createElement("div")
//     // embedImg.appendChild(addImg)

//     const embedLink = document.createElement("div");
//     const embedInput = document.createElement("input");
//     const embedLinkBtn = document.createElement("button");
//     embedLinkBtn.innerHTML = "Embed Link";
//     embedInput.placeholder = "pate the embed url";
//     embedInput.value = this.data && this.data.url ? this.data.url : ""; // need to do this 
//     embedLink.appendChild(embedInput);

//     embedInput.addEventListener("paste", (e) => {
//       this._createImage(e.clipboardData.getData("text"));
//     });

//     embedImgIcon.addEventListener("click", (e) => {
//       embedLink.appendChild(embedInput);
//       embedLink.appendChild(embedLinkBtn);
//       this.addImg.appendChild(embedLink);
//     });

//     const unsplashImgIcon = document.createElement("div");
//     unsplashImgIcon.innerHTML = "Unsplash";
//     unsplashImgIcon.classList.add("unsplashImg-icon");

//     uploadIcons.appendChild(embedImgIcon);
//     uploadIcons.appendChild(unsplashImgIcon);

//     unsplashImgIcon.addEventListener("click", () => {
//       const photoSearch = new PhotoSearch();
//       this.addImg.appendChild(photoSearch)
//     })

//     this.addImg.appendChild(uploadIcons);
//     // this.addImg.appendChild(uploadBtn);

//     const container = document.createElement("div");
//     container.appendChild(this.addImg);
//     container.appendChild(this.wrapper);

//     return container;
//   }

//   _createImage(url, captionText) {
//     const image = document.createElement("img");
//     // const caption = document.createElement("input");
//     const caption = document.createElement("div");
//     image.src = url;
//     caption.placeholder = "Caption...";
//     caption.contentEditable = true;
//     caption.value = captionText || "";

//     this.wrapper.innerHTML = "";
//     this.wrapper.appendChild(image);
//     this.wrapper.appendChild(caption);

//     this._acceptTuneView();
//   }

//   save(blockContent) {
//     // const input = blockContent.querySelector("input"); // it was needed when getting the input url after pressing save

//     const image = blockContent.querySelector("img");
//     // const caption = blockContent.querySelector("input");
//     const caption = blockContent.querySelector("[contenteditable]");

//     // return {
//     return Object.assign(this.data, {
//       url: image.src,
//       // caption: caption.value,
//       caption: caption.innerHTML || "",
//       // };
//     });
//   }

//   validate(savedData) {
//     if (!savedData.url.trim()) {
//       return false;
//     }
//     return true;
//   }

//   renderSettings() {
//     const wrapper = document.createElement("div");

//     this.settings.forEach((tune) => {
//       let button = document.createElement("div");

//       // button.classList.add('cdx-settings-button');
//       // button.classList.toggle('cdx-settings-button--active', this.data[tune.name]);

//       button.classList.add(this.api.styles.settingsButton);
//       button.classList.toggle(
//         this.api.styles.settingsButtonActive,
//         this.data[tune.name]
//       );

//       button.innerHTML = tune.icon;
//       wrapper.appendChild(button);

//       button.addEventListener("click", () => {
//         this._toggleTune(tune.name);
//         // button.classList.toggle('cdx-settings-button--active');
//         button.classList.toggle(this.api.styles.settingsButtonActive);
//       });
//     });

//     return wrapper;
//   }

//   _toggleTune(tune) {
//     // console.log('Image tune clicked', tune);
//     this.data[tune] = !this.data[tune];
//     this._acceptTuneView();
//   }

//   _acceptTuneView() {
//     this.settings.forEach((tune) => {
//       this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);

//       if (tune.name === "stretched") {
//         this.api.blocks.stretchBlock(
//           this.api.blocks.getCurrentBlockIndex(),
//           !this.data.stretched
//         );
//       }
//     });
//   }
// }

// export default SimpleImage;




import React, { useState, useEffect } from 'react';
import PhotoSearch from "./unsplash";

const SimpleImage = ({  api }) => {
  const [data, setData] = useState({
    url: initialData.url || "",
    caption: initialData.caption || "",
    withBorder: initialData.withBorder !== undefined ? initialData.withBorder : false,
    withBackground: initialData.withBackground !== undefined ? initialData.withBackground : false,
    stretched: initialData.stretched !== undefined ? initialData.stretched : false,
  });

  const [embedBtn, setEmbedBtn] = useState(false)

  let wrapperRef = useRef(null);
  let addImgRef = useRef(null);
  
  const settings = [
    {
      name: 'withBorder',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG path */}
        </svg>
      ),
    },
    {
      name: 'stretched',
      icon: (
        <svg
          width="17"
          height="10"
          viewBox="0 0 17 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG path */}
        </svg>
      ),
    },
    {
      name: 'withBackground',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ... SVG path */}
        </svg>
      ),
    },
  ];


  SimpleImage.toolbox = {
    title: "Image",
    icon: (
      <svg
        width="17"
        height="15"
        viewBox="0 0 336 276"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z" />
      </svg>
    ),
  };

  const toggleTune = tune => {
    switch (tune) {
      case 'withBorder':
        setWithBorder(!withBorder);
        break;
      case 'withBackground':
        setWithBackground(!withBackground);
        break;
      case 'stretched':
        setStretched(!stretched);
        break;
      default:
        break;
    }
  };

const validate = (savedData) => {
    if (!savedData.url.trim()) {
      return false;
    }
    return true;
}

  const renderSettings = () => (
    <div className="settings-wrapper">
      {settings.map(tune => (
        <div
          key={tune.name}
          className={`settings-button ${data[tune.name] ? 'active' : ''}`}
          onClick={() => toggleTune(tune.name)}
        >
          {tune.icon}
        </div>
      ))}
    </div>
    

  )


  const acceptTuneView = () => {
    settings.forEach(tune => {
      const wrapperElement = document.querySelector('.simple-image');
      if (withBorder || withBackground || stretched) {
        wrapperElement.classList.add(tune.name);
      } else {
        wrapperElement.classList.remove(tune.name);
      }

      if (tune.name === 'stretched') {
        api.blocks.stretchBlock(api.blocks.getCurrentBlockIndex(), !stretched);
      }
    });
  };

  useEffect(() => {
    acceptTuneView();
  }, [withBorder, withBackground, stretched, api]);


  useEffect(() => {
    // Update wrapper class based on settings
    const wrapperClasses = settings
      .filter(tune => data[tune.name])
      .map(tune => tune.name)
      .join(' ');

    // Stretch the block based on the stretched setting
    if (settings.find(tune => tune.name === 'stretched')) {
      api.blocks.stretchBlock(api.blocks.getCurrentBlockIndex(), !stretched);
    }

    const wrapperElement = document.querySelector('.simple-image');
    wrapperElement.className = `simple-image ${wrapperClasses}`;
  }, [data, api, stretched]);

  const createImage = (url, captionText) => {
setData.url(url)
setData.caption(captionText || "")
    acceptTuneView();
  };

  const handleImagePaste = event => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const imageUrl = clipboardData.getData('text');
    createImage(imageUrl, caption);
  };

  return (
    <div className="img-box">
      <div className="upload-icons">
        <div className="embedImg-icon" onClick={() => setEmbedBtn(true)}>
Embed url
        </div>
        <div className="unsplashImg-icon" onClick={PhotoSearch}>
Unsplash
        </div>
      </div>


 {embedBtn && (
   <div>
  <input type="text" placeholder="paste the embed url" onPaste={(e) => createImage(e.clipboardData.getData("text"))} />
  <button>Embed Link</button>
</div>
  )}

{data.url &&  (
  <div className="simple-image">
<img src={data.url} alt="" />
<div placeholder="caption..." contentEditable={true} value={data.caption}>
</div>
    </div>
      )}
    
    </div>
  );
};

export default SimpleImage;