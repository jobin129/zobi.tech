module.exports = [
  {
    command: ["happy"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😃", "😄", "😁", "😊", "😎", "🥳", "🤩", "🤪", "🤣", "😇", "😻", "😹"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["sad"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["🥺", "😟", "😕", "😖", "😫", "🙁", "😩", "😥", "😓", "😪", "😢", "😭", "💔"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["angry"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😡", "😠", "🤬", "😤", "😾", "👿", "🔥"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["heart"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["💖", "💗", "💕", "💞", "💘", "❤️‍🔥", "🩷", "💓", "💛", "💚", "🩵", "💙", "💜", "🖤", "❤️"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["moon"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌝", "🌚"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["confused"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😕", "😟", "😵", "🤔", "😖", "😲", "😦", "🤷", "🙄"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["hot"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["🥵", "❤️", "💋", "😫", "🤤", "😋", "🥶", "😻", "👅", "👄"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["shy"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😳", "😊", "😶", "🙈", "🙊", "😳", "😳"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["love"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😍", "😘", "🥰", "😚", "😙", "❤️", "💋", "💌", "💞"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["laugh"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😂", "🤣", "😹", "😆", "😄", "😛", "😝"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["star"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["✨", "⭐", "🌟", "💫", "🌠", "🌌"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["cool"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😎", "🆒", "😎", "🧊", "😏", "👊", "🔥"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["sleep"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["😴", "💤", "😪", "🛌", "🌙", "🛏️", "🧸"];
      await animateEdit(emojis, m, Kango);
    }
  },
  {
    command: ["ghost"],
    operate: async ({ m, reply, Kango }) => {
      const emojis = ["👻", "💀", "☠️", "👹", "👺", "😈", "🎃", "🧟"];
      await animateEdit(emojis, m, Kango);
    }
  }
];

async function animateEdit(emojis, m, Kango) {
  try {
    const first = await Kango.sendMessage(m.chat, { text: emojis[0] });
    for (const emoji of emojis) {
      await new Promise(res => setTimeout(res, 700)); // Speed of edit
      await Kango.relayMessage(
        m.chat,
        {
          protocolMessage: {
            key: first.key,
            type: 14,
            editedMessage: { conversation: emoji }
          }
        },
        {}
      );
    }
  } catch (err) {
    console.log("❌ Animation error:", err.message);
  }
}