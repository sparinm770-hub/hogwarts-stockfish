const STOCKFISH_JS_URL =
  "./stockfish-18-lite-single.js";

const STOCKFISH_WASM_URL =
  "./stockfish-18-lite-single.wasm";

/*
 * Stockfish가 WASM 파일을 찾을 때
 * 같은 GitHub Pages 폴더의 정확한 주소를 사용하게 합니다.
 */
self.Module = {
  locateFile: function (path) {
    if (String(path).endsWith(".wasm")) {
      return STOCKFISH_WASM_URL;
    }

    return path;
  }
};

importScripts(STOCKFISH_JS_URL);
