const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 設定 @ 指向 src
      "@components": path.resolve(__dirname, "src/components"), // 指向 components 資料夾
    //   "@utils": path.resolve(__dirname, "src/utils") // 指向 utils 資料夾
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
    }
  }
};
