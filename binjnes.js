var Binjnes = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (Binjnes) {
    Binjnes = Binjnes || {};

    var Module = typeof Binjnes != "undefined" ? Binjnes : {};
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function (resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = Object.assign({}, Module);
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = (status, toThrow) => {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = true;
    var ENVIRONMENT_IS_WORKER = false;
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(
          0,
          scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1,
        );
      } else {
        scriptDirectory = "";
      }
      {
        read_ = (url) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = (url, onload, onerror) => {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = (title) => (document.title = title);
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    var noExitRuntime = Module["noExitRuntime"] || true;
    if (typeof WebAssembly != "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    var UTF8Decoder =
      typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode(((u0 & 31) << 6) | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 =
            ((u0 & 7) << 18) |
            (u1 << 12) |
            (u2 << 6) |
            (heapOrArray[idx++] & 63);
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    var buffer,
      HEAP8,
      HEAPU8,
      HEAP16,
      HEAPU16,
      HEAP32,
      HEAPU32,
      HEAPF32,
      HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    function keepRuntimeAlive() {
      return noExitRuntime;
    }
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
          Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
          Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return filename.startsWith(dataURIPrefix);
    }
    var wasmBinaryFile;
    wasmBinaryFile = "/js/binjnes.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        }
        throw "both async and sync fetching of the wasm failed";
      } catch (err) {
        abort(err);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" })
            .then(function (response) {
              if (!response["ok"]) {
                throw (
                  "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                );
              }
              return response["arrayBuffer"]();
            })
            .catch(function () {
              return getBinary(wasmBinaryFile);
            });
        }
      }
      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { a: asmLibraryArg };
      function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        wasmMemory = Module["asm"]["h"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["o"];
        addOnInit(Module["asm"]["i"]);
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise()
          .then(function (binary) {
            return WebAssembly.instantiate(binary, info);
          })
          .then(function (instance) {
            return instance;
          })
          .then(receiver, function (reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason);
          });
      }
      function instantiateAsync() {
        if (
          !wasmBinary &&
          typeof WebAssembly.instantiateStreaming == "function" &&
          !isDataURI(wasmBinaryFile) &&
          typeof fetch == "function"
        ) {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
            function (response) {
              var result = WebAssembly.instantiateStreaming(response, info);
              return result.then(receiveInstantiationResult, function (reason) {
                err("wasm streaming compile failed: " + reason);
                err("falling back to ArrayBuffer instantiation");
                return instantiateArrayBuffer(receiveInstantiationResult);
              });
            },
          );
        } else {
          return instantiateArrayBuffer(receiveInstantiationResult);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports = Module["instantiateWasm"](info, receiveInstance);
          return exports;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          readyPromiseReject(e);
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        callbacks.shift()(Module);
      }
    }
    function _abort() {
      abort("");
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function abortOnCannotGrowMemory(requestedSize) {
      abort("OOM");
    }
    function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }
    var SYSCALLS = {
      varargs: undefined,
      get: function () {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
        return ret;
      },
      getStr: function (ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
    };
    function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module["onExit"]) Module["onExit"](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
    function exitJS(status, implicit) {
      EXITSTATUS = status;
      _proc_exit(status);
    }
    var _exit = exitJS;
    function _fd_close(fd) {
      return 52;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      return 70;
    }
    var printCharBuffers = [null, [], []];
    function printChar(stream, curr) {
      var buffer = printCharBuffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[(iov + 4) >> 2];
        iov += 8;
        for (var j = 0; j < len; j++) {
          printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAPU32[pnum >> 2] = num;
      return 0;
    }
    var asmLibraryArg = {
      a: _abort,
      f: _emscripten_memcpy_big,
      d: _emscripten_resize_heap,
      g: _exit,
      e: _fd_close,
      c: _fd_seek,
      b: _fd_write,
    };
    var asm = createWasm();
    var ___wasm_call_ctors = (Module["___wasm_call_ctors"] = function () {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] =
        Module["asm"]["i"]).apply(null, arguments);
    });
    var _malloc = (Module["_malloc"] = function () {
      return (_malloc = Module["_malloc"] = Module["asm"]["j"]).apply(
        null,
        arguments,
      );
    });
    var _free = (Module["_free"] = function () {
      return (_free = Module["_free"] = Module["asm"]["k"]).apply(
        null,
        arguments,
      );
    });
    var _emulator_delete = (Module["_emulator_delete"] = function () {
      return (_emulator_delete = Module["_emulator_delete"] =
        Module["asm"]["l"]).apply(null, arguments);
    });
    var _emulator_set_reset = (Module["_emulator_set_reset"] = function () {
      return (_emulator_set_reset = Module["_emulator_set_reset"] =
        Module["asm"]["m"]).apply(null, arguments);
    });
    var _file_data_delete = (Module["_file_data_delete"] = function () {
      return (_file_data_delete = Module["_file_data_delete"] =
        Module["asm"]["n"]).apply(null, arguments);
    });
    var _joypad_delete = (Module["_joypad_delete"] = function () {
      return (_joypad_delete = Module["_joypad_delete"] =
        Module["asm"]["p"]).apply(null, arguments);
    });
    var _joypad_begin_rewind_playback = (Module[
      "_joypad_begin_rewind_playback"
    ] = function () {
      return (_joypad_begin_rewind_playback = Module[
        "_joypad_begin_rewind_playback"
      ] =
        Module["asm"]["q"]).apply(null, arguments);
    });
    var _joypad_end_rewind_playback = (Module["_joypad_end_rewind_playback"] =
      function () {
        return (_joypad_end_rewind_playback = Module[
          "_joypad_end_rewind_playback"
        ] =
          Module["asm"]["r"]).apply(null, arguments);
      });
    var _rewind_append = (Module["_rewind_append"] = function () {
      return (_rewind_append = Module["_rewind_append"] =
        Module["asm"]["s"]).apply(null, arguments);
    });
    var _rewind_delete = (Module["_rewind_delete"] = function () {
      return (_rewind_delete = Module["_rewind_delete"] =
        Module["asm"]["t"]).apply(null, arguments);
    });
    var _emulator_new_simple = (Module["_emulator_new_simple"] = function () {
      return (_emulator_new_simple = Module["_emulator_new_simple"] =
        Module["asm"]["u"]).apply(null, arguments);
    });
    var _emulator_get_ticks_f64 = (Module["_emulator_get_ticks_f64"] =
      function () {
        return (_emulator_get_ticks_f64 = Module["_emulator_get_ticks_f64"] =
          Module["asm"]["v"]).apply(null, arguments);
      });
    var _emulator_run_until_f64 = (Module["_emulator_run_until_f64"] =
      function () {
        return (_emulator_run_until_f64 = Module["_emulator_run_until_f64"] =
          Module["asm"]["w"]).apply(null, arguments);
      });
    var _rewind_get_newest_ticks_f64 = (Module["_rewind_get_newest_ticks_f64"] =
      function () {
        return (_rewind_get_newest_ticks_f64 = Module[
          "_rewind_get_newest_ticks_f64"
        ] =
          Module["asm"]["x"]).apply(null, arguments);
      });
    var _rewind_get_oldest_ticks_f64 = (Module["_rewind_get_oldest_ticks_f64"] =
      function () {
        return (_rewind_get_oldest_ticks_f64 = Module[
          "_rewind_get_oldest_ticks_f64"
        ] =
          Module["asm"]["y"]).apply(null, arguments);
      });
    var _joypad_new_simple = (Module["_joypad_new_simple"] = function () {
      return (_joypad_new_simple = Module["_joypad_new_simple"] =
        Module["asm"]["z"]).apply(null, arguments);
    });
    var _set_joyp_up = (Module["_set_joyp_up"] = function () {
      return (_set_joyp_up = Module["_set_joyp_up"] = Module["asm"]["A"]).apply(
        null,
        arguments,
      );
    });
    var _set_joyp_down = (Module["_set_joyp_down"] = function () {
      return (_set_joyp_down = Module["_set_joyp_down"] =
        Module["asm"]["B"]).apply(null, arguments);
    });
    var _set_joyp_left = (Module["_set_joyp_left"] = function () {
      return (_set_joyp_left = Module["_set_joyp_left"] =
        Module["asm"]["C"]).apply(null, arguments);
    });
    var _set_joyp_right = (Module["_set_joyp_right"] = function () {
      return (_set_joyp_right = Module["_set_joyp_right"] =
        Module["asm"]["D"]).apply(null, arguments);
    });
    var _set_joyp_B = (Module["_set_joyp_B"] = function () {
      return (_set_joyp_B = Module["_set_joyp_B"] = Module["asm"]["E"]).apply(
        null,
        arguments,
      );
    });
    var _set_joyp_A = (Module["_set_joyp_A"] = function () {
      return (_set_joyp_A = Module["_set_joyp_A"] = Module["asm"]["F"]).apply(
        null,
        arguments,
      );
    });
    var _set_joyp_start = (Module["_set_joyp_start"] = function () {
      return (_set_joyp_start = Module["_set_joyp_start"] =
        Module["asm"]["G"]).apply(null, arguments);
    });
    var _set_joyp_select = (Module["_set_joyp_select"] = function () {
      return (_set_joyp_select = Module["_set_joyp_select"] =
        Module["asm"]["H"]).apply(null, arguments);
    });
    var _get_frame_buffer_ptr = (Module["_get_frame_buffer_ptr"] = function () {
      return (_get_frame_buffer_ptr = Module["_get_frame_buffer_ptr"] =
        Module["asm"]["I"]).apply(null, arguments);
    });
    var _get_frame_buffer_size = (Module["_get_frame_buffer_size"] =
      function () {
        return (_get_frame_buffer_size = Module["_get_frame_buffer_size"] =
          Module["asm"]["J"]).apply(null, arguments);
      });
    var _get_audio_buffer_ptr = (Module["_get_audio_buffer_ptr"] = function () {
      return (_get_audio_buffer_ptr = Module["_get_audio_buffer_ptr"] =
        Module["asm"]["K"]).apply(null, arguments);
    });
    var _get_audio_buffer_capacity = (Module["_get_audio_buffer_capacity"] =
      function () {
        return (_get_audio_buffer_capacity = Module[
          "_get_audio_buffer_capacity"
        ] =
          Module["asm"]["L"]).apply(null, arguments);
      });
    var _get_file_data_ptr = (Module["_get_file_data_ptr"] = function () {
      return (_get_file_data_ptr = Module["_get_file_data_ptr"] =
        Module["asm"]["M"]).apply(null, arguments);
    });
    var _get_file_data_size = (Module["_get_file_data_size"] = function () {
      return (_get_file_data_size = Module["_get_file_data_size"] =
        Module["asm"]["N"]).apply(null, arguments);
    });
    var _rewind_new_simple = (Module["_rewind_new_simple"] = function () {
      return (_rewind_new_simple = Module["_rewind_new_simple"] =
        Module["asm"]["O"]).apply(null, arguments);
    });
    var _rewind_begin = (Module["_rewind_begin"] = function () {
      return (_rewind_begin = Module["_rewind_begin"] =
        Module["asm"]["P"]).apply(null, arguments);
    });
    var _rewind_to_ticks_wrapper = (Module["_rewind_to_ticks_wrapper"] =
      function () {
        return (_rewind_to_ticks_wrapper = Module["_rewind_to_ticks_wrapper"] =
          Module["asm"]["Q"]).apply(null, arguments);
      });
    var _rewind_end = (Module["_rewind_end"] = function () {
      return (_rewind_end = Module["_rewind_end"] = Module["asm"]["R"]).apply(
        null,
        arguments,
      );
    });
    var calledRun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
          setTimeout(function () {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();

    return Binjnes.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = Binjnes;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return Binjnes;
  });
else if (typeof exports === "object") exports["Binjnes"] = Binjnes;

export default Binjnes;
