var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// .wrangler/tmp/bundle-HMAGxw/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
__name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    return Reflect.apply(target, thisArg, [
      stripCfConnectingIPHeader.apply(null, argArray)
    ]);
  }
});

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
__name(PerformanceEntry, "PerformanceEntry");
var PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
}, "PerformanceMark");
var PerformanceMeasure = class extends PerformanceEntry {
  entryType = "measure";
};
__name(PerformanceMeasure, "PerformanceMeasure");
var PerformanceResourceTiming = class extends PerformanceEntry {
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
__name(PerformanceResourceTiming, "PerformanceResourceTiming");
var PerformanceObserverEntryList = class {
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
__name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
var Performance = class {
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e2) => e2.name !== markName) : this._entries.filter((e2) => e2.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e2) => e2.name !== measureName) : this._entries.filter((e2) => e2.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e2) => e2.entryType !== "resource" || e2.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e2) => e2.name === name && (!type || e2.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e2) => e2.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
__name(Performance, "Performance");
var PerformanceObserver = class {
  __unenv__ = true;
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
__name(PerformanceObserver, "PerformanceObserver");
__publicField(PerformanceObserver, "supportedEntryTypes", []);
var performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance2;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// node_modules/unenv/dist/runtime/node/console.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole = globalThis["console"];
var {
  assert,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
globalThis.console = console_default;

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream = class extends Socket {
  fd;
  constructor(fd) {
    super();
    this.fd = fd;
  }
  isRaw = false;
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
  isTTY = false;
};
__name(ReadStream, "ReadStream");

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream = class extends Socket2 {
  fd;
  constructor(fd) {
    super();
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count3, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  columns = 80;
  rows = 24;
  isTTY = false;
};
__name(WriteStream, "WriteStream");

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class extends EventEmitter {
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return "";
  }
  get versions() {
    return {};
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  ref() {
  }
  unref() {
  }
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: () => 0 });
  mainModule = void 0;
  domain = void 0;
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
__name(Process, "Process");

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var { exit, platform, nextTick } = getBuiltinModule(
  "node:process"
);
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  nextTick
});
var {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  finalization,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  on,
  off,
  once,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert: assert2,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// dist/_worker.js/index.js
import "cloudflare:workers";
var __defProp2 = Object.defineProperty;
var __esmMin = /* @__PURE__ */ __name((fn, res, err) => () => {
  if (err)
    throw err[0];
  try {
    return fn && (res = fn(fn = 0)), res;
  } catch (e2) {
    throw err = [e2], e2;
  }
}, "__esmMin");
var __exportAll = /* @__PURE__ */ __name((all, no_symbols) => {
  let target = {};
  for (var name in all)
    __defProp2(target, name, {
      get: all[name],
      enumerable: true
    });
  if (!no_symbols)
    __defProp2(target, Symbol.toStringTag, { value: "Module" });
  return target;
}, "__exportAll");
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
__name(appendForwardSlash, "appendForwardSlash");
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
__name(prependForwardSlash, "prependForwardSlash");
function collapseDuplicateLeadingSlashes(path) {
  if (!path)
    return path;
  return path.replace(MANY_LEADING_SLASHES, "/");
}
__name(collapseDuplicateLeadingSlashes, "collapseDuplicateLeadingSlashes");
function collapseDuplicateSlashes(path) {
  if (!path)
    return path;
  return path.replace(MANY_SLASHES, "/");
}
__name(collapseDuplicateSlashes, "collapseDuplicateSlashes");
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
  if (!path)
    return path;
  return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
__name(collapseDuplicateTrailingSlashes, "collapseDuplicateTrailingSlashes");
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
__name(removeTrailingForwardSlash, "removeTrailingForwardSlash");
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
__name(removeLeadingForwardSlash, "removeLeadingForwardSlash");
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
__name(trimSlashes, "trimSlashes");
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
__name(isString, "isString");
function isInternalPath(path) {
  const prefix = path.slice(0, 2).replace(/\\/g, "/");
  return INTERNAL_PREFIXES.has(prefix) && !JUST_SLASHES.test(path);
}
__name(isInternalPath, "isInternalPath");
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i2) => {
    if (i2 === 0)
      return removeTrailingForwardSlash(path);
    else if (i2 === paths.length - 1)
      return removeLeadingForwardSlash(path);
    else
      return trimSlashes(path);
  }).join("/");
}
__name(joinPaths, "joinPaths");
function slash(path) {
  return path.replace(/\\/g, "/");
}
__name(slash, "slash");
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
__name(fileExtension, "fileExtension");
function hasFileExtension(path) {
  return WITH_FILE_EXT.test(path);
}
__name(hasFileExtension, "hasFileExtension");
var MANY_LEADING_SLASHES;
var MANY_SLASHES;
var MANY_TRAILING_SLASHES;
var INTERNAL_PREFIXES;
var JUST_SLASHES;
var WITH_FILE_EXT;
var init_path$1 = __esmMin(() => {
  MANY_LEADING_SLASHES = /^\/{2,}/;
  MANY_SLASHES = /\/{2,}/g;
  MANY_TRAILING_SLASHES = /\/{2,}$/g;
  INTERNAL_PREFIXES = /* @__PURE__ */ new Set([
    "/_",
    "/@",
    "/.",
    "//"
  ]);
  JUST_SLASHES = /^\/{2,}$/;
  WITH_FILE_EXT = /\/[^/]+\.\w+$/;
});
init_path$1();
function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
__name(matchPattern, "matchPattern");
function matchPort(url, port) {
  return !port || port === url.port;
}
__name(matchPort, "matchPort");
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
__name(matchProtocol, "matchProtocol");
function matchHostname(url, hostname, allowWildcard = false) {
  if (!hostname)
    return true;
  else if (!allowWildcard || !hostname.startsWith("*"))
    return hostname === url.hostname;
  else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    if (!url.hostname.endsWith(slicedHostname))
      return false;
    const subdomainWithDot = url.hostname.slice(0, -(slicedHostname.length - 1));
    return subdomainWithDot.endsWith(".") && !subdomainWithDot.slice(0, -1).includes(".");
  }
  return false;
}
__name(matchHostname, "matchHostname");
function matchPathname(url, pathname, allowWildcard = false) {
  if (!pathname)
    return true;
  else if (!allowWildcard || !pathname.endsWith("*"))
    return pathname === url.pathname;
  else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    if (!url.pathname.startsWith(slicedPathname))
      return false;
    return url.pathname.slice(slicedPathname.length).split("/").filter(Boolean).length === 1;
  }
  return false;
}
__name(matchPathname, "matchPathname");
function pathHasLocale(path, locales) {
  const segments = path.split("/").map(normalizeThePath);
  for (const segment of segments)
    for (const locale of locales)
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale))
          return true;
      } else if (segment === locale.path)
        return true;
  return false;
}
__name(pathHasLocale, "pathHasLocale");
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
__name(normalizeTheLocale, "normalizeTheLocale");
function normalizeThePath(path) {
  return path.endsWith(".html") ? path.slice(0, -5) : path;
}
__name(normalizeThePath, "normalizeThePath");
function computePathnameFromDomain(request, url, i18n, base, trailingSlash, logger, pathnameFromRequest) {
  let pathname = void 0;
  if (i18n && (i18n.strategy === "domains-prefix-always" || i18n.strategy === "domains-prefix-other-locales" || i18n.strategy === "domains-prefix-always-no-redirect")) {
    let host = request.headers.get("X-Forwarded-Host");
    let protocol = request.headers.get("X-Forwarded-Proto");
    if (protocol)
      protocol = protocol + ":";
    else
      protocol = url.protocol;
    if (!host)
      host = request.headers.get("Host");
    if (host && protocol) {
      host = host.split(":")[0];
      try {
        let locale;
        const hostAsUrl = new URL(`${protocol}//${host}`);
        for (const [domainKey, localeValue] of Object.entries(i18n.domainLookupTable)) {
          const domainKeyAsUrl = new URL(domainKey);
          if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
            locale = localeValue;
            break;
          }
        }
        if (locale) {
          const requestPathname = pathnameFromRequest ?? removeBase(url.pathname, base);
          pathname = prependForwardSlash(joinPaths(normalizeTheLocale(locale), requestPathname));
          if (trailingSlash === "always")
            pathname = appendForwardSlash(pathname);
          else if (trailingSlash === "never")
            pathname = removeTrailingForwardSlash(pathname);
          else if (requestPathname.endsWith("/"))
            pathname = appendForwardSlash(pathname);
        }
      } catch (e2) {
        logger.error("router", `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`);
        logger.error("router", `Error: ${e2}`);
      }
    }
  }
  return pathname;
}
__name(computePathnameFromDomain, "computePathnameFromDomain");
function removeBase(pathname, base) {
  pathname = collapseDuplicateLeadingSlashes(pathname);
  if (pathname.startsWith(base))
    return pathname.slice(removeTrailingForwardSlash(base).length + 1);
  return pathname;
}
__name(removeBase, "removeBase");
function isLocalizedErrorRoute(route, status, locales) {
  if (!locales)
    return false;
  const suffix = `/${status}`;
  if (!route.endsWith(suffix))
    return false;
  const localeSegment = route.slice(0, -suffix.length);
  if (!localeSegment || localeSegment.includes("/", 1))
    return false;
  return pathHasLocale(localeSegment, locales);
}
__name(isLocalizedErrorRoute, "isLocalizedErrorRoute");
function getErrorRoutePath(pathname, status, routes, locales, appendTrailingSlash = false) {
  const suffix = appendTrailingSlash ? "/" : "";
  if (locales) {
    const firstSegment = pathname.split("/").find(Boolean);
    if (firstSegment && pathHasLocale(`/${firstSegment}`, locales)) {
      const localized = `/${firstSegment}/${status}`;
      if (routes.some((route) => route.route === localized))
        return `${localized}${suffix}`;
    }
  }
  return `/${status}${suffix}`;
}
__name(getErrorRoutePath, "getErrorRoutePath");
var NOOP_ACTIONS_MOD;
var init_noop_actions = __esmMin(() => {
  NOOP_ACTIONS_MOD = { server: {} };
});
function defineMiddleware(fn) {
  return fn;
}
__name(defineMiddleware, "defineMiddleware");
var init_defineMiddleware = __esmMin(() => {
});
function isForbiddenCrossOriginRequest(request, url, isPrerendered) {
  if (isPrerendered)
    return false;
  if (SAFE_METHODS.includes(request.method))
    return false;
  const isSameOrigin = request.headers.get("origin") === url.origin;
  if (request.headers.has("content-type"))
    return hasFormLikeHeader(request.headers.get("content-type")) && !isSameOrigin;
  return !isSameOrigin;
}
__name(isForbiddenCrossOriginRequest, "isForbiddenCrossOriginRequest");
function createCrossOriginForbiddenResponse(request) {
  return new Response(`Cross-site ${request.method} form submissions are forbidden`, { status: 403 });
}
__name(createCrossOriginForbiddenResponse, "createCrossOriginForbiddenResponse");
function createOriginCheckMiddleware() {
  return defineMiddleware((context2, next) => {
    const { request, url, isPrerendered } = context2;
    if (isForbiddenCrossOriginRequest(request, url, isPrerendered))
      return createCrossOriginForbiddenResponse(request);
    return next();
  });
}
__name(createOriginCheckMiddleware, "createOriginCheckMiddleware");
function hasFormLikeHeader(contentType) {
  if (contentType) {
    for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES)
      if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE))
        return true;
  }
  return false;
}
__name(hasFormLikeHeader, "hasFormLikeHeader");
var FORM_CONTENT_TYPES;
var SAFE_METHODS;
var init_origin_check = __esmMin(() => {
  init_defineMiddleware();
  FORM_CONTENT_TYPES = [
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ];
  SAFE_METHODS = [
    "GET",
    "HEAD",
    "OPTIONS"
  ];
});
var ClientAddressNotAvailable;
var PrerenderClientAddressNotAvailable;
var StaticClientAddressNotAvailable;
var NoMatchingStaticPathFound;
var OnlyResponseCanBeReturned;
var MissingMediaQueryDirective;
var NoMatchingRenderer;
var NoClientOnlyHint;
var InvalidGetStaticPathsEntry;
var InvalidGetStaticPathsReturn;
var GetStaticPathsExpectedParams;
var GetStaticPathsInvalidRouteParam;
var GetStaticPathsRequired;
var ReservedSlotName;
var NoMatchingImport;
var PageNumberParamNotFound;
var PrerenderDynamicEndpointPathCollide;
var ResponseSentError;
var MiddlewareNoDataOrNextCalled;
var MiddlewareNotAResponse;
var EndpointDidNotReturnAResponse;
var LocalsNotAnObject;
var LocalsReassigned;
var AstroResponseHeadersReassigned;
var i18nNoLocaleFoundInPath;
var RewriteWithBodyUsed;
var ForbiddenRewrite;
var UnableToLoadLogger;
var ActionsReturnedInvalidDataError;
var ActionNotFoundError;
var SessionStorageInitError;
var SessionStorageSaveError;
var CacheNotEnabled;
var init_errors_data = __esmMin(() => {
  ClientAddressNotAvailable = {
    name: "ClientAddressNotAvailable",
    title: "`Astro.clientAddress` is not available in current adapter.",
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  };
  PrerenderClientAddressNotAvailable = {
    name: "PrerenderClientAddressNotAvailable",
    title: "`Astro.clientAddress` cannot be used inside prerendered routes.",
    message: (name) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${name}.`
  };
  StaticClientAddressNotAvailable = {
    name: "StaticClientAddressNotAvailable",
    title: "`Astro.clientAddress` is not available in prerendered pages.",
    message: "`Astro.clientAddress` is only available on pages that are server-rendered.",
    hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR."
  };
  NoMatchingStaticPathFound = {
    name: "NoMatchingStaticPathFound",
    title: "No static path found for requested path.",
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  };
  OnlyResponseCanBeReturned = {
    name: "OnlyResponseCanBeReturned",
    title: "Invalid type returned by Astro page.",
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information."
  };
  MissingMediaQueryDirective = {
    name: "MissingMediaQueryDirective",
    title: "Missing value for `client:media` directive.",
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided.'
  };
  NoMatchingRenderer = {
    name: "NoMatchingRenderer",
    title: "No matching renderer found.",
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`
  };
  NoClientOnlyHint = {
    name: "NoClientOnlyHint",
    title: "Missing hint on client:only directive.",
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on \`client:only\`.`
  };
  InvalidGetStaticPathsEntry = {
    name: "InvalidGetStaticPathsEntry",
    title: "Invalid entry inside `getStaticPaths()`'s return value.",
    message: (entryType) => `Invalid entry returned by \`getStaticPaths()\`. Expected an object, got \`${entryType}\`.`,
    hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
  };
  InvalidGetStaticPathsReturn = {
    name: "InvalidGetStaticPathsReturn",
    title: "Invalid value returned by `getStaticPaths()`.",
    message: (returnType) => `Invalid type returned by \`getStaticPaths()\`. Expected an \`array\`, got \`${returnType}\`.`,
    hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
  };
  GetStaticPathsExpectedParams = {
    name: "GetStaticPathsExpectedParams",
    title: "Missing params property on `getStaticPaths()` route.",
    message: "Missing or empty required `params` property on `getStaticPaths()` route.",
    hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
  };
  GetStaticPathsInvalidRouteParam = {
    name: "GetStaticPathsInvalidRouteParam",
    title: "Invalid route parameter returned by `getStaticPaths()`.",
    message: (key, value, valueType) => `Invalid \`getStaticPaths()\` route parameter for \`${key}\`. Expected a string or undefined, received \`${valueType}\` (\`${value}\`).`,
    hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on `getStaticPaths()`."
  };
  GetStaticPathsRequired = {
    name: "GetStaticPathsRequired",
    title: "`getStaticPaths()` function required for dynamic routes.",
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths()` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

	If you meant for this route to be server-rendered, set \`export const prerender = false;\` in the page.`
  };
  ReservedSlotName = {
    name: "ReservedSlotName",
    title: "Invalid slot name.",
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  };
  NoMatchingImport = {
    name: "NoMatchingImport",
    title: "No import found for component.",
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  };
  PageNumberParamNotFound = {
    name: "PageNumberParamNotFound",
    title: "Page number param not found.",
    message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
    hint: "Rename your file to `[page].astro` or `[...page].astro`."
  };
  PrerenderDynamicEndpointPathCollide = {
    name: "PrerenderDynamicEndpointPathCollide",
    title: "Prerendered dynamic endpoint has path collision.",
    message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
    hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m) => `.json` + m)}\``
  };
  ResponseSentError = {
    name: "ResponseSentError",
    title: "Unable to set response.",
    message: "The response has already been sent to the browser and cannot be altered."
  };
  MiddlewareNoDataOrNextCalled = {
    name: "MiddlewareNoDataOrNextCalled",
    title: "The middleware didn't return a `Response`.",
    message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
  };
  MiddlewareNotAResponse = {
    name: "MiddlewareNotAResponse",
    title: "The middleware returned something that is not a `Response` object.",
    message: "Any data returned from middleware must be a valid `Response` object."
  };
  EndpointDidNotReturnAResponse = {
    name: "EndpointDidNotReturnAResponse",
    title: "The endpoint did not return a `Response`.",
    message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`."
  };
  LocalsNotAnObject = {
    name: "LocalsNotAnObject",
    title: "Value assigned to `locals` is not accepted.",
    message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
    hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
  };
  LocalsReassigned = {
    name: "LocalsReassigned",
    title: "`locals` must not be reassigned.",
    message: "`locals` cannot be assigned directly.",
    hint: "Set a `locals` property instead."
  };
  AstroResponseHeadersReassigned = {
    name: "AstroResponseHeadersReassigned",
    title: "`Astro.response.headers` must not be reassigned.",
    message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
    hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
  };
  i18nNoLocaleFoundInPath = {
    name: "i18nNoLocaleFoundInPath",
    title: "The path doesn't contain any locale.",
    message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale."
  };
  RewriteWithBodyUsed = {
    name: "RewriteWithBodyUsed",
    title: "Cannot use `Astro.rewrite()` after the request body has been read.",
    message: "`Astro.rewrite()` cannot be used if the request body has already been read. If you need to read the body, first clone the request."
  };
  ForbiddenRewrite = {
    name: "ForbiddenRewrite",
    title: "Forbidden rewrite to a static route.",
    message: (from, to, component) => `You tried to rewrite the on-demand route '${from}' with the static route '${to}', when using the 'server' output. 

The static route '${to}' is rendered by the component
'${component}', which is marked as prerendered. This is a forbidden operation because during the build, the component '${component}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`,
    hint: (component) => `Add \`export const prerender = false\` to the component '${component}', or use \`Astro.redirect()\`.`
  };
  UnableToLoadLogger = {
    name: "UnableToLoadLogger",
    title: "Unable to load the logger.",
    message: (path) => `Couldn't load the logger at given path "${path}".`
  };
  ActionsReturnedInvalidDataError = {
    name: "ActionsReturnedInvalidDataError",
    title: "Action handler returned invalid data.",
    message: (error4) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${error4}`,
    hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
  };
  ActionNotFoundError = {
    name: "ActionNotFoundError",
    title: "Action not found.",
    message: (actionName) => `The server received a request for an action named \`${actionName}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`,
    hint: "You can run `astro check` to detect type errors caused by mismatched action names."
  };
  SessionStorageInitError = {
    name: "SessionStorageInitError",
    title: "Session storage could not be initialized.",
    message: (error4, driver) => `Error when initializing session storage${driver ? ` with driver \`${driver}\`` : ""}. \`${error4 ?? ""}\``,
    hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
  };
  SessionStorageSaveError = {
    name: "SessionStorageSaveError",
    title: "Session data could not be saved.",
    message: (error4, driver) => `Error when saving session data${driver ? ` with driver \`${driver}\`` : ""}. \`${error4 ?? ""}\``,
    hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
  };
  CacheNotEnabled = {
    name: "CacheNotEnabled",
    title: "Cache is not enabled.",
    message: "`Astro.cache` is not available because the cache feature is not enabled. To use caching, configure a cache provider in your Astro config under `cache`.",
    hint: 'Use an adapter that provides a default cache provider, or set one explicitly: `cache: { provider: "..." }`. See https://docs.astro.build/en/guides/caching/.'
  };
});
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
__name(normalizeLF, "normalizeLF");
var init_utils$1 = __esmMin(() => {
});
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0)
    return "";
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n2 = -2; n2 <= 2; n2++)
    if (lines[loc.line + n2])
      visibleLines.push(loc.line + n2);
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({ length: loc.column }).join(" ")}^
`;
  }
  return output;
}
__name(codeFrame, "codeFrame");
var init_printer = __esmMin(() => {
  init_utils$1();
});
var AstroError;
var init_errors$3 = __esmMin(() => {
  init_printer();
  AstroError = /* @__PURE__ */ __name(class extends Error {
    loc;
    title;
    hint;
    frame;
    type = "AstroError";
    constructor(props, options) {
      const { name, title: title2, message, stack, location, hint, frame } = props;
      super(message, options);
      this.title = title2;
      this.name = name;
      if (message)
        this.message = message;
      this.stack = stack ? stack : this.stack;
      this.loc = location;
      this.hint = hint;
      this.frame = frame;
    }
    setLocation(location) {
      this.loc = location;
    }
    setName(name) {
      this.name = name;
    }
    setMessage(message) {
      this.message = message;
    }
    setHint(hint) {
      this.hint = hint;
    }
    setFrame(source, location) {
      this.frame = codeFrame(source, location);
    }
    static is(err) {
      return err?.type === "AstroError";
    }
  }, "AstroError");
});
var init_errors$2 = __esmMin(() => {
  init_errors$3();
  init_errors_data();
});
var e;
var t;
var n;
var r$1;
var i;
var a;
var o;
var s;
var init_dist$1 = __esmMin(() => {
  e = globalThis.process || {};
  t = e.argv || [];
  n = e.env || {};
  r$1 = !(n.NO_COLOR || t.includes(`--no-color`)) && (!!n.FORCE_COLOR || t.includes(`--color`) || e.platform === `win32` || (e.stdout || {}).isTTY && n.TERM !== `dumb` || !!n.CI);
  i = /* @__PURE__ */ __name((e2, t2, n2 = e2) => (r2) => {
    let i2 = `` + r2, o2 = i2.indexOf(t2, e2.length);
    return ~o2 ? e2 + a(i2, t2, n2, o2) + t2 : e2 + i2 + t2;
  }, "i");
  a = /* @__PURE__ */ __name((e2, t2, n2, r2) => {
    let i2 = ``, a2 = 0;
    do
      i2 += e2.substring(a2, r2) + n2, a2 = r2 + t2.length, r2 = e2.indexOf(t2, a2);
    while (~r2);
    return i2 + e2.substring(a2);
  }, "a");
  o = /* @__PURE__ */ __name((e2 = r$1) => {
    let t2 = e2 ? i : () => String;
    return {
      isColorSupported: e2,
      reset: t2(`\x1B[0m`, `\x1B[0m`),
      bold: t2(`\x1B[1m`, `\x1B[22m`, `\x1B[22m\x1B[1m`),
      dim: t2(`\x1B[2m`, `\x1B[22m`, `\x1B[22m\x1B[2m`),
      italic: t2(`\x1B[3m`, `\x1B[23m`),
      underline: t2(`\x1B[4m`, `\x1B[24m`),
      inverse: t2(`\x1B[7m`, `\x1B[27m`),
      hidden: t2(`\x1B[8m`, `\x1B[28m`),
      strikethrough: t2(`\x1B[9m`, `\x1B[29m`),
      black: t2(`\x1B[30m`, `\x1B[39m`),
      red: t2(`\x1B[31m`, `\x1B[39m`),
      green: t2(`\x1B[32m`, `\x1B[39m`),
      yellow: t2(`\x1B[33m`, `\x1B[39m`),
      blue: t2(`\x1B[34m`, `\x1B[39m`),
      magenta: t2(`\x1B[35m`, `\x1B[39m`),
      cyan: t2(`\x1B[36m`, `\x1B[39m`),
      white: t2(`\x1B[37m`, `\x1B[39m`),
      gray: t2(`\x1B[90m`, `\x1B[39m`),
      bgBlack: t2(`\x1B[40m`, `\x1B[49m`),
      bgRed: t2(`\x1B[41m`, `\x1B[49m`),
      bgGreen: t2(`\x1B[42m`, `\x1B[49m`),
      bgYellow: t2(`\x1B[43m`, `\x1B[49m`),
      bgBlue: t2(`\x1B[44m`, `\x1B[49m`),
      bgMagenta: t2(`\x1B[45m`, `\x1B[49m`),
      bgCyan: t2(`\x1B[46m`, `\x1B[49m`),
      bgWhite: t2(`\x1B[47m`, `\x1B[49m`),
      blackBright: t2(`\x1B[90m`, `\x1B[39m`),
      redBright: t2(`\x1B[91m`, `\x1B[39m`),
      greenBright: t2(`\x1B[92m`, `\x1B[39m`),
      yellowBright: t2(`\x1B[93m`, `\x1B[39m`),
      blueBright: t2(`\x1B[94m`, `\x1B[39m`),
      magentaBright: t2(`\x1B[95m`, `\x1B[39m`),
      cyanBright: t2(`\x1B[96m`, `\x1B[39m`),
      whiteBright: t2(`\x1B[97m`, `\x1B[39m`),
      bgBlackBright: t2(`\x1B[100m`, `\x1B[49m`),
      bgRedBright: t2(`\x1B[101m`, `\x1B[49m`),
      bgGreenBright: t2(`\x1B[102m`, `\x1B[49m`),
      bgYellowBright: t2(`\x1B[103m`, `\x1B[49m`),
      bgBlueBright: t2(`\x1B[104m`, `\x1B[49m`),
      bgMagentaBright: t2(`\x1B[105m`, `\x1B[49m`),
      bgCyanBright: t2(`\x1B[106m`, `\x1B[49m`),
      bgWhiteBright: t2(`\x1B[107m`, `\x1B[49m`)
    };
  }, "o");
  s = o();
});
function log3(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.destination;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level))
    return;
  dest.write(event);
}
__name(log3, "log");
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
__name(isLogLevelEnabled, "isLogLevelEnabled");
function info3(opts, label, message, newLine = true) {
  return log3(opts, "info", label, message, newLine);
}
__name(info3, "info");
function warn3(opts, label, message, newLine = true) {
  return log3(opts, "warn", label, message, newLine);
}
__name(warn3, "warn");
function error3(opts, label, message, newLine = true) {
  return log3(opts, "error", label, message, newLine);
}
__name(error3, "error");
function debug3(...args) {
  if ("_astroGlobalDebug" in globalThis)
    globalThis._astroGlobalDebug(...args);
}
__name(debug3, "debug");
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(s.bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else
    prefix.push(timestamp);
  if (label)
    prefix.push(`[${label}]`);
  if (level === "error")
    return s.red(prefix.join(" "));
  if (level === "warn")
    return s.yellow(prefix.join(" "));
  if (prefix.length === 1)
    return s.dim(prefix[0]);
  return s.dim(prefix[0]) + " " + s.blue(prefix.splice(1).join(" "));
}
__name(getEventPrefix, "getEventPrefix");
var dateTimeFormat;
var levels;
var AstroLogger;
var AstroIntegrationLogger;
var init_core$2 = __esmMin(() => {
  init_dist$1();
  dateTimeFormat = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  levels = {
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    silent: 90
  };
  AstroLogger = /* @__PURE__ */ __name(class {
    options;
    constructor(options) {
      this.options = options;
    }
    info(label, message, newLine = true) {
      info3(this.options, label, message, newLine);
    }
    warn(label, message, newLine = true) {
      warn3(this.options, label, message, newLine);
    }
    error(label, message, newLine = true) {
      error3(this.options, label, message, newLine);
    }
    debug(label, ...messages) {
      debug3(label, ...messages);
    }
    level() {
      return this.options.level;
    }
    forkIntegrationLogger(label) {
      return new AstroIntegrationLogger(this.options, label);
    }
    setDestination(destination) {
      this.options.destination = destination;
    }
    /**
    * It calls the `close` function of the provided destination, if it exists.
    */
    close() {
      if (this.options.destination.close)
        this.options.destination.close();
    }
    /**
    * It calls the `flush` function of the provided destination, if it exists.
    */
    flush() {
      if (this.options.destination.flush)
        this.options.destination.flush();
    }
  }, "AstroLogger");
  AstroIntegrationLogger = /* @__PURE__ */ __name(class AstroIntegrationLogger2 {
    options;
    label;
    constructor(logging, label) {
      this.options = logging;
      this.label = label;
    }
    /**
    * Creates a new logger instance with a new label, but the same log options.
    */
    fork(label) {
      return new AstroIntegrationLogger2(this.options, label);
    }
    info(message) {
      info3(this.options, this.label, message);
    }
    warn(message) {
      warn3(this.options, this.label, message);
    }
    error(message) {
      error3(this.options, this.label, message);
    }
    debug(message) {
      debug3(this.label, message);
    }
    /**
    * It calls the `flush` function of the provided destination, if it exists.
    */
    flush() {
      if (this.options.destination.flush)
        this.options.destination.flush();
    }
    /**
    * It calls the `close` function of the provided destination, if it exists.
    */
    close() {
      if (this.options.destination.close)
        this.options.destination.close();
    }
  }, "AstroIntegrationLogger");
});
var NOOP_MIDDLEWARE_FN;
var init_noop_middleware = __esmMin(() => {
  NOOP_MIDDLEWARE_FN = /* @__PURE__ */ __name(async (_ctx, next) => {
    return await next();
  }, "NOOP_MIDDLEWARE_FN");
});
var ASTRO_VERSION;
var ASTRO_GENERATOR;
var ASTRO_ERROR_HEADER;
var DEFAULT_404_COMPONENT;
var REDIRECT_STATUS_CODES;
var REROUTABLE_STATUS_CODES;
var clientAddressSymbol;
var originPathnameSymbol;
var pipelineSymbol;
var fetchStateSymbol;
var appSymbol;
var responseSentSymbol$1;
var init_constants = __esmMin(() => {
  ASTRO_VERSION = "7.1.3";
  ASTRO_GENERATOR = `Astro v${ASTRO_VERSION}`;
  ASTRO_ERROR_HEADER = "X-Astro-Error";
  DEFAULT_404_COMPONENT = "astro-default-404.astro";
  REDIRECT_STATUS_CODES = [
    301,
    302,
    303,
    307,
    308,
    300,
    304
  ];
  REROUTABLE_STATUS_CODES = [404, 500];
  clientAddressSymbol = /* @__PURE__ */ Symbol.for("astro.clientAddress");
  originPathnameSymbol = /* @__PURE__ */ Symbol.for("astro.originPathname");
  pipelineSymbol = /* @__PURE__ */ Symbol.for("astro.pipeline");
  fetchStateSymbol = /* @__PURE__ */ Symbol.for("astro.fetchState");
  appSymbol = /* @__PURE__ */ Symbol.for("astro.app");
  responseSentSymbol$1 = /* @__PURE__ */ Symbol.for("astro.responseSent");
});
function isRoute404(route) {
  return ROUTE404_RE.test(route);
}
__name(isRoute404, "isRoute404");
function isRoute500(route) {
  return ROUTE500_RE.test(route);
}
__name(isRoute500, "isRoute500");
var ROUTE404_RE;
var ROUTE500_RE;
var init_route_errors = __esmMin(() => {
  ROUTE404_RE = /^\/404\/?$/;
  ROUTE500_RE = /^\/500\/?$/;
});
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
__name(routeIsRedirect, "routeIsRedirect");
function routeIsFallback(route) {
  return route?.type === "fallback";
}
__name(routeIsFallback, "routeIsFallback");
function getFallbackRoute(route, routeList) {
  const fallbackRoute = routeList.find((r2) => {
    if (route.route === "/" && r2.routeData.route === "/")
      return true;
    return r2.routeData.fallbackRoutes.find((f) => {
      return f.route === route.route;
    });
  });
  if (!fallbackRoute)
    throw new Error(`No fallback route found for route ${route.route}`);
  return fallbackRoute.routeData;
}
__name(getFallbackRoute, "getFallbackRoute");
function getCustom404Route(manifestData) {
  return manifestData.routes.find((r2) => isRoute404(r2.route));
}
__name(getCustom404Route, "getCustom404Route");
function routeHasHtmlExtension(route) {
  return route.segments.some((segment) => segment.some((part) => !part.dynamic && part.content.includes(".html")));
}
__name(routeHasHtmlExtension, "routeHasHtmlExtension");
var init_helpers = __esmMin(() => {
  init_route_errors();
});
var init_path = __esmMin(() => {
  init_path$1();
});
function sanitizeParams(params) {
  return Object.fromEntries(Object.entries(params).map(([key, value]) => {
    if (typeof value === "string")
      return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
    return [key, value];
  }));
}
__name(sanitizeParams, "sanitizeParams");
function getParameter(part, params) {
  if (part.spread)
    return params[part.content.slice(3)] ?? "";
  if (part.dynamic) {
    if (params[part.content] === void 0)
      throw new TypeError(`Missing parameter: ${part.content}`);
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
__name(getParameter, "getParameter");
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? collapseDuplicateLeadingSlashes("/" + segmentPath) : "";
}
__name(getSegment, "getSegment");
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length)
      trailing = "/";
    return segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing || "/";
  };
}
__name(getRouteGenerator, "getRouteGenerator");
var init_generator = __esmMin(() => {
  init_path$1();
});
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value))
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: { file: route }
    });
}
__name(validateGetStaticPathsParameter, "validateGetStaticPathsParameter");
var VALID_PARAM_TYPES;
var init_validation$1 = __esmMin(() => {
  init_errors$2();
  VALID_PARAM_TYPES = ["string", "undefined"];
});
function stringifyParams(params, route, trailingSlash) {
  if (route.type === "endpoint" && hasFileExtension(route.route))
    trailingSlash = "never";
  const validatedParams = {};
  for (const [key, value] of Object.entries(params)) {
    validateGetStaticPathsParameter([key, value], route.component);
    if (value !== void 0)
      validatedParams[key] = trimSlashes(value);
  }
  return getRouteGenerator(route.segments, trailingSlash)(validatedParams);
}
__name(stringifyParams, "stringifyParams");
var init_params = __esmMin(() => {
  init_path$1();
  init_path();
  init_generator();
  init_validation$1();
});
function validateDynamicRouteModule(mod, { ssr, route }) {
  if ((!ssr || route.prerender) && route.origin !== "internal" && !mod.getStaticPaths)
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
}
__name(validateDynamicRouteModule, "validateDynamicRouteModule");
function validateGetStaticPathsResult(result, route) {
  if (!Array.isArray(result))
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: { file: route.component }
    });
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null)
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(Array.isArray(pathObject) ? "array" : typeof pathObject)
      });
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0)
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: { file: route.component }
      });
  });
}
__name(validateGetStaticPathsResult, "validateGetStaticPathsResult");
var init_validation = __esmMin(() => {
  init_errors$2();
});
function generatePaginateFunction(routeMatch, base, trailingSlash) {
  return /* @__PURE__ */ __name(function paginateUtility(data, args = {}) {
    const generate = getRouteGenerator(routeMatch.segments, trailingSlash);
    let { pageSize: _pageSize, params: _params, props: _props, format: _format } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    const formatUrl = _format || ((url) => url);
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`))
      includesFirstPageNumber = false;
    else if (routeMatch.params.includes(`${paramName}`))
      includesFirstPageNumber = true;
    else
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    return [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = formatUrl(addRouteBase(generate({ ...params }), base));
      const next = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
        ...params,
        page: String(pageNum + 1)
      }), base));
      const prev = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
        ...params,
        page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
      }), base));
      const first = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
        ...params,
        page: includesFirstPageNumber ? "1" : void 0
      }), base));
      const last = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
        ...params,
        page: String(lastPage)
      }), base));
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current,
              next,
              prev,
              first,
              last
            }
          }
        }
      };
    });
  }, "paginateUtility");
}
__name(generatePaginateFunction, "generatePaginateFunction");
function addRouteBase(route, base) {
  let routeWithBase = joinPaths(base, route);
  if (routeWithBase === "")
    routeWithBase = "/";
  return routeWithBase;
}
__name(addRouteBase, "addRouteBase");
var init_paginate = __esmMin(() => {
  init_errors$2();
  init_path();
  init_generator();
});
async function callGetStaticPaths({ mod, route, routeCache, ssr, base, trailingSlash }) {
  const cached2 = routeCache.get(route);
  if (!mod)
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  if (cached2?.staticPaths && cached2.mod === mod)
    return cached2.staticPaths;
  validateDynamicRouteModule(mod, {
    ssr,
    route
  });
  if (ssr && !route.prerender || route.origin === "internal") {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, {
      ...cached2,
      mod,
      staticPaths: entry
    });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths)
    throw new Error("Unexpected Error.");
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route, base, trailingSlash),
    routePattern: route.route
  });
  validateGetStaticPathsResult(staticPaths, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route, trailingSlash);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, {
    ...cached2,
    mod,
    staticPaths: keyedStaticPaths
  });
  return keyedStaticPaths;
}
__name(callGetStaticPaths, "callGetStaticPaths");
function findPathItemByKey(staticPaths, params, route, logger, trailingSlash) {
  const paramsKey = stringifyParams(params, route, trailingSlash);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath)
    return matchedStaticPath;
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
__name(findPathItemByKey, "findPathItemByKey");
var RouteCache;
var init_route_cache = __esmMin(() => {
  init_params();
  init_validation();
  init_paginate();
  RouteCache = /* @__PURE__ */ __name(class {
    logger;
    cache = {};
    runtimeMode;
    constructor(logger, runtimeMode = "production") {
      this.logger = logger;
      this.runtimeMode = runtimeMode;
    }
    /** Clear the cache. */
    clearAll() {
      this.cache = {};
    }
    set(route, entry) {
      const key = this.key(route);
      if (this.runtimeMode === "production" && this.cache[key]?.staticPaths)
        this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
      this.cache[key] = entry;
    }
    get(route) {
      return this.cache[this.key(route)];
    }
    key(route) {
      return `${route.route}_${route.component}`;
    }
  }, "RouteCache");
});
async function getProps(opts) {
  const { logger, mod, routeData: route, routeCache, pathname, serverLike, base, trailingSlash } = opts;
  if (!route || route.pathname)
    return {};
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === "astro-default-404.astro")
    return {};
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    ssr: serverLike,
    base,
    trailingSlash
  });
  const params = getParams(route, pathname);
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger, trailingSlash);
  if (!matchedStaticPath && route.origin !== "internal" && (serverLike ? route.prerender : true))
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  if (mod)
    validatePrerenderEndpointCollision(route, mod, params);
  return matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
}
__name(getProps, "getProps");
function getParams(route, pathname) {
  if (!route.params.length)
    return {};
  const hasHtmlSuffix = pathname.endsWith(".html") && !routeHasHtmlExtension(route);
  const path = hasHtmlSuffix && route.type === "page" ? pathname.slice(0, -5) : pathname;
  const allPatterns = [route, ...route.fallbackRoutes].map((r2) => r2.pattern);
  let paramsMatch = allPatterns.map((pattern) => pattern.exec(path)).find((x) => x);
  if (!paramsMatch && hasHtmlSuffix && route.type !== "page") {
    const strippedPath = pathname.endsWith("/index.html") ? pathname.slice(0, -11) || "/" : pathname.slice(0, -5);
    paramsMatch = allPatterns.map((pattern) => pattern.exec(strippedPath)).find((x) => x);
  }
  if (!paramsMatch)
    return {};
  const params = {};
  route.params.forEach((key, i2) => {
    if (key.startsWith("..."))
      params[key.slice(3)] = paramsMatch[i2 + 1] ? paramsMatch[i2 + 1] : void 0;
    else
      params[key] = paramsMatch[i2 + 1];
  });
  return params;
}
__name(getParams, "getParams");
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0)
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: { file: route.component }
      });
  }
}
__name(validatePrerenderEndpointCollision, "validatePrerenderEndpointCollision");
var init_params_and_props = __esmMin(() => {
  init_constants();
  init_errors$2();
  init_helpers();
  init_route_cache();
});
var init_astro_global = __esmMin(() => {
  init_constants();
});
async function renderEndpoint(mod, context2, isPrerendered, logger, state) {
  const { request, url } = context2;
  const method = request.method.toUpperCase();
  let handler = mod[method] ?? mod["ALL"];
  if (!handler && method === "HEAD" && mod["GET"])
    handler = mod["GET"];
  if (isPrerendered && !["GET", "HEAD"].includes(method))
    logger.warn("router", `${url.pathname} ${s.bold(method)} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`);
  if (handler === void 0) {
    logger.warn("router", `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : ""));
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error("router", `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`);
    return new Response(null, { status: 500 });
  }
  let response = await handler.call(mod, context2);
  if (!response || response instanceof Response === false)
    throw new AstroError(EndpointDidNotReturnAResponse);
  if (state && REROUTABLE_STATUS_CODES.includes(response.status))
    state.skipErrorReroute = true;
  if (method === "HEAD")
    return new Response(null, response);
  return response;
}
__name(renderEndpoint, "renderEndpoint");
var init_endpoint$1 = __esmMin(() => {
  init_dist$1();
  init_constants();
  init_errors$3();
  init_errors_data();
});
var replace;
var ca;
var esca;
var pe;
var escape;
var init_esm = __esmMin(() => {
  ({ replace } = "");
  ca = /[&<>'"]/g;
  esca = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  pe = /* @__PURE__ */ __name((m) => esca[m], "pe");
  escape = /* @__PURE__ */ __name((es) => replace.call(es, ca, pe), "escape");
});
function isPromise(value) {
  return !!value && typeof value === "object" && "then" in value && typeof value.then === "function";
}
__name(isPromise, "isPromise");
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
__name(streamAsyncIterator, "streamAsyncIterator");
var init_util$3 = __esmMin(() => {
});
function stringifyForScript(value) {
  return JSON.stringify(value)?.replace(/</g, "\\u003c");
}
__name(stringifyForScript, "stringifyForScript");
function isHTMLString(value) {
  return !!value?.[htmlStringSymbol];
}
__name(isHTMLString, "isHTMLString");
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
__name(markHTMLBytes, "markHTMLBytes");
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
__name(hasGetReader, "hasGetReader");
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable))
    for await (const chunk of streamAsyncIterator(iterable))
      yield unescapeHTML(chunk);
  else
    for await (const chunk of iterable)
      yield unescapeHTML(chunk);
}
__name(unescapeChunksAsync, "unescapeChunksAsync");
function* unescapeChunks(iterable) {
  for (const chunk of iterable)
    yield unescapeHTML(chunk);
}
__name(unescapeChunks, "unescapeChunks");
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array)
      return markHTMLBytes(str);
    else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function")
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    else if (str[/* @__PURE__ */ Symbol.for("astro:slot-string")])
      return str;
    else if (Symbol.iterator in str)
      return unescapeChunks(str);
    else if (Symbol.asyncIterator in str || hasGetReader(str))
      return unescapeChunksAsync(str);
  }
  return markHTMLString(str);
}
__name(unescapeHTML, "unescapeHTML");
var escapeHTML;
var HTMLBytes;
var htmlStringSymbol;
var HTMLString;
var markHTMLString;
var init_escape = __esmMin(() => {
  init_esm();
  init_util$3();
  escapeHTML = escape;
  HTMLBytes = /* @__PURE__ */ __name(class extends Uint8Array {
  }, "HTMLBytes");
  Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, { get() {
    return "HTMLBytes";
  } });
  htmlStringSymbol = /* @__PURE__ */ Symbol.for("astro:html-string");
  HTMLString = /* @__PURE__ */ __name(class extends String {
    [htmlStringSymbol] = true;
  }, "HTMLString");
  markHTMLString = /* @__PURE__ */ __name((value) => {
    if (isHTMLString(value))
      return value;
    if (typeof value === "string")
      return new HTMLString(value);
    return value;
  }, "markHTMLString");
});
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode["astro:jsx"];
}
__name(isVNode, "isVNode");
var init_jsx_runtime = __esmMin(() => {
  init_server();
});
function isPropagatingHint(hint) {
  return hint === "self" || hint === "in-tree";
}
__name(isPropagatingHint, "isPropagatingHint");
var init_resolver = __esmMin(() => {
});
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
__name(isAstroComponentFactory, "isAstroComponentFactory");
var init_factory = __esmMin(() => {
});
function r(e2) {
  var t2, f, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var o2 = e2.length;
      for (t2 = 0; t2 < o2; t2++)
        e2[t2] && (f = r(e2[t2])) && (n2 && (n2 += " "), n2 += f);
    } else
      for (f in e2)
        e2[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
__name(r, "r");
function clsx() {
  for (var e2, t2, f = 0, n2 = "", o2 = arguments.length; f < o2; f++)
    (e2 = arguments[f]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
__name(clsx, "clsx");
var init_clsx = __esmMin(() => {
});
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value))
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
__name(serializeArray, "serializeArray");
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value))
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  parents.add(value);
  const serialized = Object.fromEntries(Object.entries(value).map(([k, v]) => {
    return [k, convertToSerializedForm(v, metadata, parents)];
  }));
  parents.delete(value);
  return serialized;
}
__name(serializeObject, "serializeObject");
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  switch (Object.prototype.toString.call(value)) {
    case "[object Date]":
      return [PROP_TYPE.Date, value.toISOString()];
    case "[object RegExp]":
      return [PROP_TYPE.RegExp, value.source];
    case "[object Map]":
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    case "[object Set]":
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    case "[object BigInt]":
      return [PROP_TYPE.BigInt, value.toString()];
    case "[object URL]":
      return [PROP_TYPE.URL, value.toString()];
    case "[object Array]":
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    case "[object Uint8Array]":
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    case "[object Uint16Array]":
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    case "[object Uint32Array]":
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    default:
      if (value !== null && typeof value === "object")
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      if (value === Number.POSITIVE_INFINITY)
        return [PROP_TYPE.Infinity, 1];
      if (value === Number.NEGATIVE_INFINITY)
        return [PROP_TYPE.Infinity, -1];
      if (value === void 0)
        return [PROP_TYPE.Value];
      return [PROP_TYPE.Value, value];
  }
}
__name(convertToSerializedForm, "convertToSerializedForm");
function serializeProps(props, metadata) {
  return JSON.stringify(serializeObject(props, metadata));
}
__name(serializeProps, "serializeProps");
var PROP_TYPE;
var init_serialize = __esmMin(() => {
  PROP_TYPE = {
    Value: 0,
    JSON: 1,
    RegExp: 2,
    Date: 3,
    Map: 4,
    Set: 5,
    BigInt: 6,
    URL: 7,
    Uint8Array: 8,
    Uint16Array: 9,
    Uint32Array: 10,
    Infinity: 11
  };
});
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root")
        extracted.isPage = true;
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration)
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      switch (key) {
        case "client:component-path":
          extracted.hydration.componentUrl = value;
          break;
        case "client:component-export":
          extracted.hydration.componentExport.value = value;
          break;
        case "client:component-hydration":
          break;
        case "client:display-name":
          break;
        default:
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(`Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`);
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string")
            throw new AstroError(MissingMediaQueryDirective);
          break;
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key))
        extracted.propsWithoutTransitionAttributes[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
__name(extractDirectives, "extractDirectives");
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value)
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  const island = {
    children: "",
    props: { uid: astroId }
  };
  if (attrs)
    for (const [key, value] of Object.entries(attrs))
      island.props[key] = escapeHTML(value);
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint.toString()));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length)
    island.props["before-hydration-url"] = beforeHydrationUrl;
  island.props["opts"] = escapeHTML(JSON.stringify({
    name: metadata.displayName,
    value: metadata.hydrateArgs || ""
  }));
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined")
      island.props[name] = escapeHTML(String(props[name]));
  });
  return island;
}
__name(generateHydrateScript, "generateHydrateScript");
var transitionDirectivesToCopyOnIsland;
var init_hydration = __esmMin(() => {
  init_errors$2();
  init_escape();
  init_serialize();
  transitionDirectivesToCopyOnIsland = Object.freeze([
    "data-astro-transition-scope",
    "data-astro-transition-persist",
    "data-astro-transition-persist-props"
  ]);
});
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i2 = 0; i2 < str.length; i2++) {
    const ch = str.charCodeAt(i2);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
__name(bitwise, "bitwise");
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0)
    result = dictionary[integer] + result;
  return sign + result;
}
__name(shorthash, "shorthash");
var dictionary;
var binary;
var init_shorthash = __esmMin(() => {
  dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
  binary = 61;
});
function isHeadAndContent(obj) {
  return typeof obj === "object" && obj !== null && !!obj[headAndContentSym];
}
__name(isHeadAndContent, "isHeadAndContent");
function createThinHead() {
  return { [headAndContentSym]: true };
}
__name(createThinHead, "createThinHead");
var headAndContentSym;
var init_head_and_content = __esmMin(() => {
  headAndContentSym = /* @__PURE__ */ Symbol.for("astro.headAndContent");
});
var astro_island_prebuilt_default;
var init_astro_island_prebuilt = __esmMin(() => {
  astro_island_prebuilt_default = `(()=>{var g=Object.defineProperty;var w=(a,s,c)=>s in a?g(a,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[s]=c;var l=(a,s,c)=>w(a,typeof s!="symbol"?s+"":s,c);var E=new Set(["__proto__","constructor","prototype"]);{let a={0:t=>y(t),1:t=>c(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(c(t)),5:t=>new Set(c(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>Number.POSITIVE_INFINITY*t},s=t=>{let[p,e]=t;return p in a?a[p](e):void 0},c=t=>t.map(s),y=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([p,e])=>[p,s(e)]));class f extends HTMLElement{constructor(){super(...arguments);l(this,"Component");l(this,"hydrator");l(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),n={},d=this.querySelectorAll("template[data-astro-template]");for(let o of d){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[o.getAttribute("data-astro-template")||"default"]=o.innerHTML,o.remove())}for(let o of r){let i=o.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[o.getAttribute("name")||"default"]=o.innerHTML)}let u;try{u=this.hasAttribute("props")?y(JSON.parse(this.getAttribute("props"))):{}}catch(o){let i=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(i+=\` (export \${v})\`),console.error(\`[hydrate] Error parsing props for component \${i}\`,this.getAttribute("props"),o),o}let h;await this.hydrator(this)(this.Component,u,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});l(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),r.disconnect(),this.childrenConnectedCallback()},r=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});r.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}getRetryImportUrl(e){let r=new URL(e,document.baseURI);return r.searchParams.set("astro-retry",Date.now().toString()),r.toString()}async importWithRetry(e){try{return await import(e)}catch(r){return await new Promise(n=>setTimeout(n,1e3)),import(this.getRetryImportUrl(e))}}handleHydrationError(e){let r=this.getAttribute("component-url"),n=new CustomEvent("astro:hydration-error",{cancelable:!0,bubbles:!0,composed:!0,detail:{error:e,componentUrl:r}});this.dispatchEvent(n)&&console.error(\`[astro-island] Error hydrating \${r}\`,e)}async start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(\`astro:\${r}\`,()=>this.start(),{once:!0});return}try{await Astro[r](async()=>{let n=this.getAttribute("renderer-url");try{let[d,{default:u}]=await Promise.all([this.importWithRetry(this.getAttribute("component-url")),n?this.importWithRetry(n):Promise.resolve({default:()=>()=>{}})]),h=this.getAttribute("component-export")||"default";if(h.includes(".")){this.Component=d;for(let m of h.split(".")){if(E.has(m)||!this.Component||typeof this.Component!="object"&&typeof this.Component!="function"||!Object.hasOwn(this.Component,m))throw new Error(\`Invalid component export path: \${h}\`);this.Component=this.Component[m]}}else{if(E.has(h))throw new Error(\`Invalid component export path: \${h}\`);this.Component=d[h]}return this.hydrator=u,this.hydrate}catch(d){return this.handleHydrationError(d),()=>{}}},e,this)}catch(n){this.handleHydrationError(n)}}attributeChangedCallback(){this.hydrate()}}l(f,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",f)}})();`;
});
var ISLAND_STYLES;
var init_astro_island_styles = __esmMin(() => {
  ISLAND_STYLES = "astro-island,astro-slot,astro-static-slot{display:contents}";
});
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.templateDepth > 0)
    return !result._metadata.hasHydrationScript;
  if (result._metadata.hasHydrationScript)
    return false;
  return result._metadata.hasHydrationScript = true;
}
__name(determineIfNeedsHydrationScript, "determineIfNeedsHydrationScript");
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.templateDepth > 0)
    return !result._metadata.hasDirectives.has(directive);
  if (result._metadata.hasDirectives.has(directive))
    return false;
  result._metadata.hasDirectives.add(directive);
  return true;
}
__name(determinesIfNeedsDirectiveScript, "determinesIfNeedsDirectiveScript");
function getDirectiveScriptText(result, directive) {
  const clientDirective = result.clientDirectives.get(directive);
  if (!clientDirective)
    throw new Error(`Unknown directive: ${directive}`);
  return clientDirective;
}
__name(getDirectiveScriptText, "getDirectiveScriptText");
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `<style>${ISLAND_STYLES}</style><script>${getDirectiveScriptText(result, directive)}<\/script><script>${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
}
__name(getPrescripts, "getPrescripts");
var init_scripts = __esmMin(() => {
  init_astro_island_prebuilt();
  init_astro_island_styles();
});
async function collectPropagatedHeadParts(input) {
  const collectedHeadParts = [];
  const pendingSlotEvaluations = input.result._metadata?.pendingSlotEvaluations ?? [];
  const drainPendingSlots = /* @__PURE__ */ __name(async () => {
    while (pendingSlotEvaluations.length > 0) {
      const batch = pendingSlotEvaluations.splice(0, pendingSlotEvaluations.length);
      await Promise.all(batch);
    }
  }, "drainPendingSlots");
  await drainPendingSlots();
  for (const propagator of input.propagators) {
    const returnValue = await propagator.init(input.result);
    if (input.isHeadAndContent(returnValue) && returnValue.head)
      collectedHeadParts.push(returnValue.head);
    await drainPendingSlots();
  }
  return collectedHeadParts;
}
__name(collectPropagatedHeadParts, "collectPropagatedHeadParts");
var init_buffer = __esmMin(() => {
});
function shouldRenderHeadInstruction(state) {
  return !state.hasRenderedHead && !state.partial;
}
__name(shouldRenderHeadInstruction, "shouldRenderHeadInstruction");
function shouldRenderMaybeHeadInstruction(state) {
  return !state.hasRenderedHead && !state.headInTree && !state.partial;
}
__name(shouldRenderMaybeHeadInstruction, "shouldRenderMaybeHeadInstruction");
function shouldRenderInstruction$1(type, state) {
  return type === "head" ? shouldRenderHeadInstruction(state) : shouldRenderMaybeHeadInstruction(state);
}
__name(shouldRenderInstruction$1, "shouldRenderInstruction$1");
var init_policy = __esmMin(() => {
});
function registerIfPropagating(result, factory, instance) {
  if (factory.propagation === "self" || factory.propagation === "in-tree") {
    result._metadata.propagators.add(instance);
    return;
  }
  if (factory.moduleId) {
    const hint = result.componentMetadata.get(factory.moduleId)?.propagation;
    if (isPropagatingHint(hint ?? "none"))
      result._metadata.propagators.add(instance);
  }
}
__name(registerIfPropagating, "registerIfPropagating");
async function bufferPropagatedHead(result) {
  const collected = await collectPropagatedHeadParts({
    propagators: result._metadata.propagators,
    result,
    isHeadAndContent
  });
  result._metadata.extraHead.push(...collected);
}
__name(bufferPropagatedHead, "bufferPropagatedHead");
function shouldRenderInstruction(type, state) {
  return shouldRenderInstruction$1(type, state);
}
__name(shouldRenderInstruction, "shouldRenderInstruction");
function getInstructionRenderState(result) {
  return {
    hasRenderedHead: result._metadata.hasRenderedHead,
    headInTree: result._metadata.headInTree,
    partial: result.partial
  };
}
__name(getInstructionRenderState, "getInstructionRenderState");
var init_runtime$1 = __esmMin(() => {
  init_buffer();
  init_resolver();
  init_policy();
  init_head_and_content();
});
function normalizeCspResourceEntry(entry) {
  if (typeof entry === "string")
    return {
      resource: entry,
      kind: "default"
    };
  return {
    resource: entry.resource,
    kind: entry.kind ?? "default"
  };
}
__name(normalizeCspResourceEntry, "normalizeCspResourceEntry");
function normalizeCspHashEntry(entry) {
  if (typeof entry === "string")
    return {
      hash: entry,
      kind: "default"
    };
  return {
    hash: entry.hash,
    kind: entry.kind ?? "default"
  };
}
__name(normalizeCspHashEntry, "normalizeCspHashEntry");
function partitionByKind(directive) {
  const groups = {
    default: {
      resources: [],
      hashes: []
    },
    element: {
      resources: [],
      hashes: []
    },
    attribute: {
      resources: [],
      hashes: []
    }
  };
  for (const entry of directive.resources) {
    const { resource, kind } = normalizeCspResourceEntry(entry);
    groups[kind].resources.push(resource);
  }
  for (const entry of directive.hashes) {
    const { hash, kind } = normalizeCspHashEntry(entry);
    groups[kind].hashes.push(hash);
  }
  return groups;
}
__name(partitionByKind, "partitionByKind");
function deduplicateDirectiveValues(existingDirective, newDirective) {
  const [directiveName, ...existingValues] = existingDirective.split(/\s+/).filter(Boolean);
  const [newDirectiveName, ...newValues] = newDirective.split(/\s+/).filter(Boolean);
  if (directiveName !== newDirectiveName)
    return;
  return `${directiveName} ${Array.from(/* @__PURE__ */ new Set([...existingValues, ...newValues])).join(" ")}`;
}
__name(deduplicateDirectiveValues, "deduplicateDirectiveValues");
function pushDirective(directives, newDirective) {
  if (directives.length === 0)
    return [newDirective];
  const finalDirectives = [];
  let matched = false;
  for (const directive of directives) {
    if (matched) {
      finalDirectives.push(directive);
      continue;
    }
    const result = deduplicateDirectiveValues(directive, newDirective);
    if (result) {
      finalDirectives.push(result);
      matched = true;
    } else
      finalDirectives.push(directive);
  }
  if (!matched)
    finalDirectives.push(newDirective);
  return finalDirectives;
}
__name(pushDirective, "pushDirective");
var init_runtime = __esmMin(() => {
});
function renderCspContent(result) {
  const { scriptDirective, styleDirective, directives } = result;
  const script = partitionByKind(scriptDirective);
  const style = partitionByKind(styleDirective);
  const finalScriptHashes = /* @__PURE__ */ new Set();
  for (const scriptHash of script.default.hashes)
    finalScriptHashes.add(`'${scriptHash}'`);
  for (const scriptHash of result._metadata.extraScriptHashes)
    finalScriptHashes.add(`'${scriptHash}'`);
  const finalStyleHashes = /* @__PURE__ */ new Set();
  for (const styleHash of style.default.hashes)
    finalStyleHashes.add(`'${styleHash}'`);
  for (const styleHash of result._metadata.extraStyleHashes)
    finalStyleHashes.add(`'${styleHash}'`);
  let directivesContent;
  if (directives.length > 0)
    directivesContent = directives.join(";") + ";";
  const scriptResources = script.default.resources.length > 0 ? script.default.resources.join(" ") : "'self'";
  const styleResources = style.default.resources.length > 0 ? style.default.resources.join(" ") : "'self'";
  const scriptElementDefaultResource = script.default.resources.length > 0 ? "" : "'self'";
  const styleElementDefaultResource = style.default.resources.length > 0 ? "" : "'self'";
  const scriptElemActive = isEnabled(script.element);
  const styleElemActive = isEnabled(style.element);
  const strictDynamicSuffix = scriptDirective.strictDynamic ? ` 'strict-dynamic'` : "";
  const scriptSrc = `script-src ${scriptResources} ${[...scriptElemActive ? [] : [...finalScriptHashes], ...scriptDirective.strictDynamic ? [`'strict-dynamic'`] : []].join(" ")};`;
  const styleSrc = `style-src ${styleResources} ${(styleElemActive ? [] : [...finalStyleHashes]).join(" ")};`;
  const scriptSrcElem = scriptElemActive ? renderSpecificDirective("script-src-elem", script.element.resources, scriptElementDefaultResource, finalScriptHashes, script.element.hashes, strictDynamicSuffix) : void 0;
  const scriptSrcAttr = isEnabled(script.attribute) ? renderSpecificDirective("script-src-attr", script.attribute.resources, "'none'", void 0, script.attribute.hashes) : void 0;
  const styleSrcElem = styleElemActive ? renderSpecificDirective("style-src-elem", style.element.resources, styleElementDefaultResource, finalStyleHashes, style.element.hashes) : void 0;
  const styleSrcAttr = isEnabled(style.attribute) ? renderSpecificDirective("style-src-attr", style.attribute.resources, "'none'", void 0, style.attribute.hashes) : void 0;
  return [
    directivesContent,
    scriptSrc,
    scriptSrcElem,
    scriptSrcAttr,
    styleSrc,
    styleSrcElem,
    styleSrcAttr
  ].filter(Boolean).join(" ");
}
__name(renderCspContent, "renderCspContent");
function isEnabled(sources) {
  return sources.resources.length > 0 || sources.hashes.length > 0;
}
__name(isEnabled, "isEnabled");
function renderSpecificDirective(name, resources, defaultResource, sharedHashes, ownHashes, suffix = "") {
  const hashes = new Set(sharedHashes);
  for (const hash of ownHashes)
    hashes.add(`'${hash}'`);
  let finalResources;
  if (resources.length > 0)
    finalResources = resources.map((r2) => `${r2}`).join(" ");
  else if (defaultResource === "'none'" && hashes.size > 0)
    finalResources = "";
  else
    finalResources = defaultResource;
  return `${name} ${[finalResources, ...hashes].filter(Boolean).join(" ")}${suffix};`;
}
__name(renderSpecificDirective, "renderSpecificDirective");
var init_csp = __esmMin(() => {
  init_runtime();
});
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, { value: true });
}
__name(createRenderInstruction, "createRenderInstruction");
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
__name(isRenderInstruction, "isRenderInstruction");
function isScriptInstruction(chunk) {
  return chunk && typeof chunk === "object" && "type" in chunk && chunk.type === "script";
}
__name(isScriptInstruction, "isScriptInstruction");
var RenderInstructionSymbol;
var init_instruction = __esmMin(() => {
  RenderInstructionSymbol = /* @__PURE__ */ Symbol.for("astro:render");
});
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars))
    output += `const ${toIdent(key)} = ${stringifyForScript(value)};
`;
  return markHTMLString(output);
}
__name(defineScriptVars, "defineScriptVars");
function formatList(values) {
  if (values.length === 1)
    return values[0];
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
__name(formatList, "formatList");
function isCustomElement(tagName) {
  return tagName.includes("-");
}
__name(isCustomElement, "isCustomElement");
function handleBooleanAttribute(key, value, shouldEscape, tagName) {
  if (tagName && isCustomElement(tagName))
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  return markHTMLString(value ? ` ${key}` : "");
}
__name(handleBooleanAttribute, "handleBooleanAttribute");
function addAttribute(value, key, shouldEscape = true, tagName = "") {
  if (value == null)
    return "";
  if (INVALID_ATTR_NAME_CHAR.test(key))
    return "";
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "")
      return "";
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2)
      return markHTMLString(` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`);
    if (typeof value === "object")
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className")
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  if (htmlBooleanAttributes.test(key))
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  if (value === "")
    return markHTMLString(` ${key}`);
  if (key === "popover" && typeof value === "boolean")
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  if (key === "download" && typeof value === "boolean")
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  if (key === "hidden" && typeof value === "boolean")
    return handleBooleanAttribute(key, value, shouldEscape, tagName);
  return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
}
__name(addAttribute, "addAttribute");
function internalSpreadAttributes(values, shouldEscape = true, tagName) {
  let output = "";
  for (const [key, value] of Object.entries(values))
    output += addAttribute(value, key, shouldEscape, tagName);
  return markHTMLString(output);
}
__name(internalSpreadAttributes, "internalSpreadAttributes");
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children === "") && voidElementNames.test(name))
    return `<${name}${internalSpreadAttributes(props, shouldEscape, name)}>`;
  return `<${name}${internalSpreadAttributes(props, shouldEscape, name)}>${children}</${name}>`;
}
__name(renderElement$1, "renderElement$1");
function createBufferedRenderer(destination, renderFunction) {
  return new BufferedRenderer(destination, renderFunction);
}
__name(createBufferedRenderer, "createBufferedRenderer");
function promiseWithResolvers() {
  let resolve, reject;
  return {
    promise: new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    }),
    resolve,
    reject
  };
}
__name(promiseWithResolvers, "promiseWithResolvers");
var voidElementNames;
var htmlBooleanAttributes;
var AMPERSAND_REGEX;
var DOUBLE_QUOTE_REGEX;
var STATIC_DIRECTIVES;
var INVALID_ATTR_NAME_CHAR;
var toIdent;
var toAttributeString;
var kebab;
var toStyleString;
var noop;
var BufferedRenderer;
var isNode;
var isDeno;
var init_util$2 = __esmMin(() => {
  init_clsx();
  init_escape();
  init_util$3();
  voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
  htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|inert|loop|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i;
  AMPERSAND_REGEX = /&/g;
  DOUBLE_QUOTE_REGEX = /"/g;
  STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
  INVALID_ATTR_NAME_CHAR = /[\s"'>/=]/;
  toIdent = /* @__PURE__ */ __name((k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index) => {
    if (/\W/.test(match))
      return "";
    return index === 0 ? match : match.toUpperCase();
  }), "toIdent");
  toAttributeString = /* @__PURE__ */ __name((value, shouldEscape = true) => shouldEscape ? String(value).replace(AMPERSAND_REGEX, "&amp;").replace(DOUBLE_QUOTE_REGEX, "&quot;") : value, "toAttributeString");
  kebab = /* @__PURE__ */ __name((k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), "kebab");
  toStyleString = /* @__PURE__ */ __name((obj) => Object.entries(obj).filter(([_, v]) => typeof v === "string" && v.trim() || typeof v === "number").map(([k, v]) => {
    if (k[0] !== "-" && k[1] !== "-")
      return `${kebab(k)}:${v}`;
    return `${k}:${v}`;
  }).join(";"), "toStyleString");
  noop = /* @__PURE__ */ __name(() => {
  }, "noop");
  BufferedRenderer = /* @__PURE__ */ __name(class {
    chunks = [];
    renderPromise;
    destination;
    /**
    * Determines whether buffer has been flushed
    * to the final destination.
    */
    flushed = false;
    constructor(destination, renderFunction) {
      this.destination = destination;
      this.renderPromise = renderFunction(this);
      if (isPromise(this.renderPromise))
        Promise.resolve(this.renderPromise).catch(noop);
    }
    write(chunk) {
      if (this.flushed)
        this.destination.write(chunk);
      else
        this.chunks.push(chunk);
    }
    flush() {
      if (this.flushed)
        throw new Error("The render buffer has already been flushed.");
      this.flushed = true;
      for (const chunk of this.chunks)
        this.destination.write(chunk);
      return this.renderPromise;
    }
  }, "BufferedRenderer");
  isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
  isDeno = typeof Deno !== "undefined";
});
function stablePropsKey(props) {
  const keys = Object.keys(props).sort();
  let result = "{";
  for (let i2 = 0; i2 < keys.length; i2++) {
    if (i2 > 0)
      result += ",";
    result += JSON.stringify(keys[i2]) + ":" + JSON.stringify(props[keys[i2]]);
  }
  result += "}";
  return result;
}
__name(stablePropsKey, "stablePropsKey");
function deduplicateElements(elements) {
  if (elements.length <= 1)
    return elements;
  const seen = /* @__PURE__ */ new Set();
  return elements.filter((item) => {
    const key = stablePropsKey(item.props) + item.children;
    if (seen.has(key))
      return false;
    seen.add(key);
    return true;
  });
}
__name(deduplicateElements, "deduplicateElements");
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  let content = "";
  if (result.shouldInjectCspMetaTags && result.cspDestination === "meta")
    content += renderElement$1("meta", {
      props: {
        "http-equiv": "content-security-policy",
        content: renderCspContent(result)
      },
      children: ""
    }, false);
  const styles = deduplicateElements(Array.from(result.styles)).map((style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style));
  result.styles.clear();
  const scripts = deduplicateElements(Array.from(result.scripts)).map((script) => {
    if (result.userAssetsBase)
      script.props.src = (result.base === "/" ? "" : result.base) + result.userAssetsBase + script.props.src;
    return renderElement$1("script", script, false);
  });
  const links = deduplicateElements(Array.from(result.links)).map((link) => renderElement$1("link", link, false));
  const sep = result.compressHTML === true || result.compressHTML === "jsx" ? "" : "\n";
  content += styles.join(sep) + links.join(sep) + scripts.join(sep);
  content += result._metadata.extraHead.join("");
  return markHTMLString(content);
}
__name(renderAllHeadContent, "renderAllHeadContent");
function maybeRenderHead() {
  return createRenderInstruction({ type: "maybe-head" });
}
__name(maybeRenderHead, "maybeRenderHead");
var init_head = __esmMin(() => {
  init_escape();
  init_csp();
  init_instruction();
  init_util$2();
});
function encodeHexUpperCase(data) {
  let result = "";
  for (let i2 = 0; i2 < data.length; i2++) {
    result += alphabetUpperCase[data[i2] >> 4];
    result += alphabetUpperCase[data[i2] & 15];
  }
  return result;
}
__name(encodeHexUpperCase, "encodeHexUpperCase");
function decodeHex(data) {
  if (data.length % 2 !== 0)
    throw new Error("Invalid hex string");
  const result = new Uint8Array(data.length / 2);
  for (let i2 = 0; i2 < data.length; i2 += 2) {
    if (!(data[i2] in decodeMap))
      throw new Error("Invalid character");
    if (!(data[i2 + 1] in decodeMap))
      throw new Error("Invalid character");
    result[i2 / 2] |= decodeMap[data[i2]] << 4;
    result[i2 / 2] |= decodeMap[data[i2 + 1]];
  }
  return result;
}
__name(decodeHex, "decodeHex");
var alphabetUpperCase;
var decodeMap;
var init_hex = __esmMin(() => {
  alphabetUpperCase = "0123456789ABCDEF";
  decodeMap = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
});
var EncodingPadding$1;
var DecodingPadding$1;
var init_base32 = __esmMin(() => {
  (function(EncodingPadding2) {
    EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
    EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
  })(EncodingPadding$1 || (EncodingPadding$1 = {}));
  (function(DecodingPadding2) {
    DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
    DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
  })(DecodingPadding$1 || (DecodingPadding$1 = {}));
});
function encodeBase64(bytes) {
  return encodeBase64_internal(bytes, base64Alphabet, EncodingPadding.Include);
}
__name(encodeBase64, "encodeBase64");
function encodeBase64_internal(bytes, alphabet, padding) {
  let result = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2 += 3) {
    let buffer2 = 0;
    let bufferBitSize = 0;
    for (let j = 0; j < 3 && i2 + j < bytes.byteLength; j++) {
      buffer2 = buffer2 << 8 | bytes[i2 + j];
      bufferBitSize += 8;
    }
    for (let j = 0; j < 4; j++)
      if (bufferBitSize >= 6) {
        result += alphabet[buffer2 >> bufferBitSize - 6 & 63];
        bufferBitSize -= 6;
      } else if (bufferBitSize > 0) {
        result += alphabet[buffer2 << 6 - bufferBitSize & 63];
        bufferBitSize = 0;
      } else if (padding === EncodingPadding.Include)
        result += "=";
  }
  return result;
}
__name(encodeBase64_internal, "encodeBase64_internal");
function decodeBase64(encoded) {
  return decodeBase64_internal(encoded, base64DecodeMap, DecodingPadding.Required);
}
__name(decodeBase64, "decodeBase64");
function decodeBase64_internal(encoded, decodeMap2, padding) {
  const result = new Uint8Array(Math.ceil(encoded.length / 4) * 3);
  let totalBytes = 0;
  for (let i2 = 0; i2 < encoded.length; i2 += 4) {
    let chunk = 0;
    let bitsRead = 0;
    for (let j = 0; j < 4; j++) {
      if (padding === DecodingPadding.Required && encoded[i2 + j] === "=")
        continue;
      if (padding === DecodingPadding.Ignore && (i2 + j >= encoded.length || encoded[i2 + j] === "="))
        continue;
      if (j > 0 && encoded[i2 + j - 1] === "=")
        throw new Error("Invalid padding");
      if (!(encoded[i2 + j] in decodeMap2))
        throw new Error("Invalid character");
      chunk |= decodeMap2[encoded[i2 + j]] << (3 - j) * 6;
      bitsRead += 6;
    }
    if (bitsRead < 24) {
      let unused;
      if (bitsRead === 12)
        unused = chunk & 65535;
      else if (bitsRead === 18)
        unused = chunk & 255;
      else
        throw new Error("Invalid padding");
      if (unused !== 0)
        throw new Error("Invalid padding");
    }
    const byteLength = Math.floor(bitsRead / 8);
    for (let i3 = 0; i3 < byteLength; i3++) {
      result[totalBytes] = chunk >> 16 - i3 * 8 & 255;
      totalBytes++;
    }
  }
  return result.slice(0, totalBytes);
}
__name(decodeBase64_internal, "decodeBase64_internal");
var base64Alphabet;
var EncodingPadding;
var DecodingPadding;
var base64DecodeMap;
var init_base64 = __esmMin(() => {
  base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  (function(EncodingPadding2) {
    EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
    EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
  })(EncodingPadding || (EncodingPadding = {}));
  (function(DecodingPadding2) {
    DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
    DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
  })(DecodingPadding || (DecodingPadding = {}));
  base64DecodeMap = {
    "0": 52,
    "1": 53,
    "2": 54,
    "3": 55,
    "4": 56,
    "5": 57,
    "6": 58,
    "7": 59,
    "8": 60,
    "9": 61,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
    a: 26,
    b: 27,
    c: 28,
    d: 29,
    e: 30,
    f: 31,
    g: 32,
    h: 33,
    i: 34,
    j: 35,
    k: 36,
    l: 37,
    m: 38,
    n: 39,
    o: 40,
    p: 41,
    q: 42,
    r: 43,
    s: 44,
    t: 45,
    u: 46,
    v: 47,
    w: 48,
    x: 49,
    y: 50,
    z: 51,
    "+": 62,
    "/": 63
  };
});
var init_dist = __esmMin(() => {
  init_hex();
  init_base32();
  init_base64();
});
function $constructor(name, initializer2, params) {
  function init(inst, def) {
    if (!inst._zod)
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    if (inst._zod.traits.has(name))
      return;
    inst._zod.traits.add(name);
    initializer2(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const k = keys[i2];
      if (!(k in inst))
        inst[k] = proto[k].bind(inst);
    }
  }
  __name(init, "init");
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  __name(Definition, "Definition");
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a4;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a4 = inst._zod).deferred ?? (_a4.deferred = []);
    for (const fn of inst._zod.deferred)
      fn();
    return inst;
  }
  __name(_, "_");
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
    if (params?.Parent && inst instanceof params.Parent)
      return true;
    return inst?._zod?.traits?.has(name);
  } });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
__name($constructor, "$constructor");
function config2(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
__name(config2, "config");
var _a$1;
var $ZodAsyncError;
var $ZodEncodeError;
var globalConfig;
var init_core$1 = __esmMin(() => {
  $ZodAsyncError = /* @__PURE__ */ __name(class extends Error {
    constructor() {
      super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
  }, "$ZodAsyncError");
  $ZodEncodeError = /* @__PURE__ */ __name(class extends Error {
    constructor(name) {
      super(`Encountered unidirectional transform during encode: ${name}`);
      this.name = "ZodEncodeError";
    }
  }, "$ZodEncodeError");
  (_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
  globalConfig = globalThis.__zod_globalConfig;
});
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
__name(getEnumValues, "getEnumValues");
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
__name(jsonStringifyReplacer, "jsonStringifyReplacer");
function cached(getter) {
  return { get value() {
    {
      const value = getter();
      Object.defineProperty(this, "value", { value });
      return value;
    }
    throw new Error("cached value already set");
  } };
}
__name(cached, "cached");
function nullish(input) {
  return input === null || input === void 0;
}
__name(nullish, "nullish");
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
__name(cleanRegex, "cleanRegex");
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING)
        return;
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, { value: v });
    },
    configurable: true
  });
}
__name(defineLazy, "defineLazy");
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
__name(assignProp, "assignProp");
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
__name(mergeDefs, "mergeDefs");
function esc(str) {
  return JSON.stringify(str);
}
__name(esc, "esc");
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
__name(slugify, "slugify");
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
__name(isObject, "isObject");
function isPlainObject(o2) {
  if (isObject(o2) === false)
    return false;
  const ctor = o2.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false)
    return false;
  return true;
}
__name(isPlainObject, "isPlainObject");
function shallowClone(o2) {
  if (isPlainObject(o2))
    return { ...o2 };
  if (Array.isArray(o2))
    return [...o2];
  if (o2 instanceof Map)
    return new Map(o2);
  if (o2 instanceof Set)
    return new Set(o2);
  return o2;
}
__name(shallowClone, "shallowClone");
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(escapeRegex, "escapeRegex");
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
__name(clone, "clone");
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return {
      ...params,
      error: () => params.error
    };
  return params;
}
__name(normalizeParams, "normalizeParams");
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
__name(optionalKeys, "optionalKeys");
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  return clone(schema, mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape))
          throw new Error(`Unrecognized key: "${key}"`);
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  }));
}
__name(pick, "pick");
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  return clone(schema, mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape))
          throw new Error(`Unrecognized key: "${key}"`);
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  }));
}
__name(omit, "omit");
function extend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to extend: expected a plain object");
  const checks = schema._zod.def.checks;
  if (checks && checks.length > 0) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape)
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return clone(schema, mergeDefs(schema._zod.def, { get shape() {
    const _shape = {
      ...schema._zod.def.shape,
      ...shape
    };
    assignProp(this, "shape", _shape);
    return _shape;
  } }));
}
__name(extend, "extend");
function safeExtend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return clone(schema, mergeDefs(schema._zod.def, { get shape() {
    const _shape = {
      ...schema._zod.def.shape,
      ...shape
    };
    assignProp(this, "shape", _shape);
    return _shape;
  } }));
}
__name(safeExtend, "safeExtend");
function merge(a2, b) {
  if (a2._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  return clone(a2, mergeDefs(a2._zod.def, {
    get shape() {
      const _shape = {
        ...a2._zod.def.shape,
        ...b._zod.def.shape
      };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  }));
}
__name(merge, "merge");
function partial(Class, schema, mask) {
  const checks = schema._zod.def.checks;
  if (checks && checks.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  return clone(schema, mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask)
        for (const key in mask) {
          if (!(key in oldShape))
            throw new Error(`Unrecognized key: "${key}"`);
          if (!mask[key])
            continue;
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      else
        for (const key in oldShape)
          shape[key] = Class ? new Class({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  }));
}
__name(partial, "partial");
function required(Class, schema, mask) {
  return clone(schema, mergeDefs(schema._zod.def, { get shape() {
    const oldShape = schema._zod.def.shape;
    const shape = { ...oldShape };
    if (mask)
      for (const key in mask) {
        if (!(key in shape))
          throw new Error(`Unrecognized key: "${key}"`);
        if (!mask[key])
          continue;
        shape[key] = new Class({
          type: "nonoptional",
          innerType: oldShape[key]
        });
      }
    else
      for (const key in oldShape)
        shape[key] = new Class({
          type: "nonoptional",
          innerType: oldShape[key]
        });
    assignProp(this, "shape", shape);
    return shape;
  } }));
}
__name(required, "required");
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i2 = startIndex; i2 < x.issues.length; i2++)
    if (x.issues[i2]?.continue !== true)
      return true;
  return false;
}
__name(aborted, "aborted");
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i2 = startIndex; i2 < x.issues.length; i2++)
    if (x.issues[i2]?.continue === false)
      return true;
  return false;
}
__name(explicitlyAborted, "explicitlyAborted");
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a4;
    (_a4 = iss).path ?? (_a4.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
__name(prefixIssues, "prefixIssues");
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
__name(unwrapMessage, "unwrapMessage");
function finalizeIssue(iss, ctx, config3) {
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config3.customError?.(iss)) ?? unwrapMessage(config3.localeError?.(iss)) ?? "Invalid input";
  const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
  rest.path ?? (rest.path = []);
  rest.message = message;
  if (ctx?.reportInput)
    rest.input = _input;
  return rest;
}
__name(finalizeIssue, "finalizeIssue");
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
__name(getLengthableOrigin, "getLengthableOrigin");
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string")
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  return { ...iss };
}
__name(issue, "issue");
var EVALUATING;
var captureStackTrace;
var allowsEval;
var propertyKeyTypes;
var init_util$1 = __esmMin(() => {
  init_core$1();
  EVALUATING = /* @__PURE__ */ Symbol("evaluating");
  captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
  };
  allowsEval = /* @__PURE__ */ cached(() => {
    if (globalConfig.jitless)
      return false;
    if (typeof navigator !== "undefined" && "Cloudflare-Workers"?.includes("Cloudflare"))
      return false;
    try {
      new Function("");
      return true;
    } catch (_) {
      return false;
    }
  });
  propertyKeyTypes = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, -Number.MAX_VALUE, Number.MAX_VALUE;
});
function flattenError(error4, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error4.issues)
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else
      formErrors.push(mapper(sub));
  return {
    formErrors,
    fieldErrors
  };
}
__name(flattenError, "flattenError");
function formatError(error4, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = /* @__PURE__ */ __name((error5, path = []) => {
    for (const issue2 of error5.issues)
      if (issue2.code === "invalid_union" && issue2.errors.length)
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      else if (issue2.code === "invalid_key")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else if (issue2.code === "invalid_element")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0)
          fieldErrors._errors.push(mapper(issue2));
        else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < fullpath.length) {
            const el = fullpath[i2];
            if (!(i2 === fullpath.length - 1))
              curr[el] = curr[el] || { _errors: [] };
            else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue2));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
  }, "processError");
  processError(error4);
  return fieldErrors;
}
__name(formatError, "formatError");
var initializer$1;
var $ZodError;
var $ZodRealError;
var init_errors$1 = __esmMin(() => {
  init_core$1();
  init_util$1();
  initializer$1 = /* @__PURE__ */ __name((inst, def) => {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
      value: inst._zod,
      enumerable: false
    });
    Object.defineProperty(inst, "issues", {
      value: def,
      enumerable: false
    });
    inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
    Object.defineProperty(inst, "toString", {
      value: () => inst.message,
      enumerable: false
    });
  }, "initializer$1");
  $ZodError = $constructor("$ZodError", initializer$1);
  $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
});
var _parse;
var _parseAsync;
var _safeParse;
var safeParse$1;
var _safeParseAsync;
var safeParseAsync$1;
var _encode;
var _decode;
var _encodeAsync;
var _decodeAsync;
var _safeEncode;
var _safeDecode;
var _safeEncodeAsync;
var _safeDecodeAsync;
var init_parse$1 = __esmMin(() => {
  init_core$1();
  init_errors$1();
  init_util$1();
  _parse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx, _params) => {
    const ctx = _ctx ? {
      ..._ctx,
      async: false
    } : { async: false };
    const result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      throw new $ZodAsyncError();
    if (result.issues.length) {
      const e2 = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config2())));
      captureStackTrace(e2, _params?.callee);
      throw e2;
    }
    return result.value;
  }, "_parse");
  _parseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx, params) => {
    const ctx = _ctx ? {
      ..._ctx,
      async: true
    } : { async: true };
    let result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e2 = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config2())));
      captureStackTrace(e2, params?.callee);
      throw e2;
    }
    return result.value;
  }, "_parseAsync");
  _safeParse = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      async: false
    } : { async: false };
    const result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      throw new $ZodAsyncError();
    return result.issues.length ? {
      success: false,
      error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config2())))
    } : {
      success: true,
      data: result.value
    };
  }, "_safeParse");
  safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
  _safeParseAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      async: true
    } : { async: true };
    let result = schema._zod.run({
      value,
      issues: []
    }, ctx);
    if (result instanceof Promise)
      result = await result;
    return result.issues.length ? {
      success: false,
      error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config2())))
    } : {
      success: true,
      data: result.value
    };
  }, "_safeParseAsync");
  safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
  _encode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      direction: "backward"
    } : { direction: "backward" };
    return _parse(_Err)(schema, value, ctx);
  }, "_encode");
  _decode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
    return _parse(_Err)(schema, value, _ctx);
  }, "_decode");
  _encodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      direction: "backward"
    } : { direction: "backward" };
    return _parseAsync(_Err)(schema, value, ctx);
  }, "_encodeAsync");
  _decodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
    return _parseAsync(_Err)(schema, value, _ctx);
  }, "_decodeAsync");
  _safeEncode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      direction: "backward"
    } : { direction: "backward" };
    return _safeParse(_Err)(schema, value, ctx);
  }, "_safeEncode");
  _safeDecode = /* @__PURE__ */ __name((_Err) => (schema, value, _ctx) => {
    return _safeParse(_Err)(schema, value, _ctx);
  }, "_safeDecode");
  _safeEncodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? {
      ..._ctx,
      direction: "backward"
    } : { direction: "backward" };
    return _safeParseAsync(_Err)(schema, value, ctx);
  }, "_safeEncodeAsync");
  _safeDecodeAsync = /* @__PURE__ */ __name((_Err) => async (schema, value, _ctx) => {
    return _safeParseAsync(_Err)(schema, value, _ctx);
  }, "_safeDecodeAsync");
});
function emoji() {
  return new RegExp(_emoji$1, "u");
}
__name(emoji, "emoji");
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
__name(timeSource, "timeSource");
function time$1(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
__name(time$1, "time$1");
function datetime$1(args) {
  const time4 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time4}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
__name(datetime$1, "datetime$1");
var cuid;
var cuid2;
var ulid;
var xid;
var ksuid;
var nanoid;
var duration$1;
var guid;
var uuid;
var email;
var _emoji$1;
var ipv4;
var ipv6;
var cidrv4;
var cidrv6;
var base64;
var base64url;
var httpProtocol;
var e164;
var dateSource;
var date$1;
var string$1;
var lowercase;
var uppercase;
var init_regexes = __esmMin(() => {
  cuid = /^[cC][0-9a-z]{6,}$/;
  cuid2 = /^[0-9a-z]+$/;
  ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  xid = /^[0-9a-vA-V]{20}$/;
  ksuid = /^[A-Za-z0-9]{27}$/;
  nanoid = /^[a-zA-Z0-9_-]{21}$/;
  duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  uuid = /* @__PURE__ */ __name((version3) => {
    if (!version3)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version3}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  }, "uuid");
  email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  base64url = /^[A-Za-z0-9_-]*$/;
  httpProtocol = /^https?$/;
  e164 = /^\+[1-9]\d{6,14}$/;
  dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
  date$1 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
  string$1 = /* @__PURE__ */ __name((params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
  }, "string$1");
  lowercase = /^[^A-Z]*$/;
  uppercase = /^[^a-z]*$/;
});
var $ZodCheck;
var $ZodCheckMaxLength;
var $ZodCheckMinLength;
var $ZodCheckLengthEquals;
var $ZodCheckStringFormat;
var $ZodCheckRegex;
var $ZodCheckLowerCase;
var $ZodCheckUpperCase;
var $ZodCheckIncludes;
var $ZodCheckStartsWith;
var $ZodCheckEndsWith;
var $ZodCheckOverwrite;
var init_checks$1 = __esmMin(() => {
  init_core$1();
  init_regexes();
  init_util$1();
  $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
    var _a4;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a4 = inst._zod).onattach ?? (_a4.onattach = []);
  });
  $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a4;
    $ZodCheck.init(inst, def);
    (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (input.length <= def.maximum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a4;
    $ZodCheck.init(inst, def);
    (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (input.length >= def.minimum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a4;
    $ZodCheck.init(inst, def);
    (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length)
        return;
      const origin = getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push({
        origin,
        ...tooBig ? {
          code: "too_big",
          maximum: def.length
        } : {
          code: "too_small",
          minimum: def.length
        },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a4, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern)
      (_a4 = inst._zod).check ?? (_a4.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          ...def.pattern ? { pattern: def.pattern.toString() } : {},
          inst,
          continue: !def.abort
        });
      });
    else
      (_b = inst._zod).check ?? (_b.check = () => {
      });
  });
  $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  });
});
var Doc;
var init_doc = __esmMin(() => {
  Doc = /* @__PURE__ */ __name(class {
    constructor(args = []) {
      this.content = [];
      this.indent = 0;
      if (this)
        this.args = args;
    }
    indented(fn) {
      this.indent += 1;
      fn(this);
      this.indent -= 1;
    }
    write(arg) {
      if (typeof arg === "function") {
        arg(this, { execution: "sync" });
        arg(this, { execution: "async" });
        return;
      }
      const lines = arg.split("\n").filter((x) => x);
      const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
      const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
      for (const line of dedented)
        this.content.push(line);
    }
    compile() {
      const F = Function;
      const args = this?.args;
      const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
      return new F(...args, lines.join("\n"));
    }
  }, "Doc");
});
var version2;
var init_versions = __esmMin(() => {
  version2 = {
    major: 4,
    minor: 4,
    patch: 3
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
__name(isValidBase64, "isValidBase64");
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  return isValidBase64(base642.padEnd(Math.ceil(base642.length / 4) * 4, "="));
}
__name(isValidBase64URL, "isValidBase64URL");
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function handleArrayResult(result, final, index) {
  if (result.issues.length)
    final.issues.push(...prefixIssues(index, result.issues));
  final.value[index] = result.value;
}
__name(handleArrayResult, "handleArrayResult");
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
  const isPresent = key in input;
  if (result.issues.length) {
    if (isOptionalIn && isOptionalOut && !isPresent)
      return;
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && !isOptionalIn) {
    if (!result.issues.length)
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    return;
  }
  if (result.value === void 0) {
    if (isPresent)
      final.value[key] = void 0;
  } else
    final.value[key] = result.value;
}
__name(handlePropertyResult, "handlePropertyResult");
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys)
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
__name(normalizeDef, "normalizeDef");
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t2 = _catchall.def.type;
  const isOptionalIn = _catchall.optin === "optional";
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (key === "__proto__")
      continue;
    if (keySet.has(key))
      continue;
    if (t2 === "never") {
      unrecognized.push(key);
      continue;
    }
    const r2 = _catchall.run({
      value: input[key],
      issues: []
    }, ctx);
    if (r2 instanceof Promise)
      proms.push(r2.then((r3) => handlePropertyResult(r3, payload, key, input, isOptionalIn, isOptionalOut)));
    else
      handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut);
  }
  if (unrecognized.length)
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
__name(handleCatchall, "handleCatchall");
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results)
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  const nonaborted = results.filter((r2) => !aborted(r2));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config2())))
  });
  return final;
}
__name(handleUnionResults, "handleUnionResults");
function mergeValues(a2, b) {
  if (a2 === b)
    return {
      valid: true,
      data: a2
    };
  if (a2 instanceof Date && b instanceof Date && +a2 === +b)
    return {
      valid: true,
      data: a2
    };
  if (isPlainObject(a2) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = {
      ...a2,
      ...b
    };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b[key]);
      if (!sharedValue.valid)
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      newObj[key] = sharedValue.data;
    }
    return {
      valid: true,
      data: newObj
    };
  }
  if (Array.isArray(a2) && Array.isArray(b)) {
    if (a2.length !== b.length)
      return {
        valid: false,
        mergeErrorPath: []
      };
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      newArray.push(sharedValue.data);
    }
    return {
      valid: true,
      data: newArray
    };
  }
  return {
    valid: false,
    mergeErrorPath: []
  };
}
__name(mergeValues, "mergeValues");
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues)
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else
      result.issues.push(iss);
  for (const iss of right.issues)
    if (iss.code === "unrecognized_keys")
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    else
      result.issues.push(iss);
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue)
    result.issues.push({
      ...unrecIssue,
      keys: bothKeys
    });
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  result.value = merged.data;
  return result;
}
__name(handleIntersectionResults, "handleIntersectionResults");
function handleOptionalResult(result, input) {
  if (input === void 0 && (result.issues.length || result.fallback))
    return {
      issues: [],
      value: void 0
    };
  return result;
}
__name(handleOptionalResult, "handleOptionalResult");
function handleDefaultResult(payload, def) {
  if (payload.value === void 0)
    payload.value = def.defaultValue;
  return payload;
}
__name(handleDefaultResult, "handleDefaultResult");
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0)
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  return payload;
}
__name(handleNonOptionalResult, "handleNonOptionalResult");
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({
    value: left.value,
    issues: left.issues,
    fallback: left.fallback
  }, ctx);
}
__name(handlePipeResult, "handlePipeResult");
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
__name(handleReadonlyResult, "handleReadonlyResult");
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
__name(handleRefineResult, "handleRefineResult");
var $ZodType;
var $ZodString;
var $ZodStringFormat;
var $ZodGUID;
var $ZodUUID;
var $ZodEmail;
var $ZodURL;
var $ZodEmoji;
var $ZodNanoID;
var $ZodCUID;
var $ZodCUID2;
var $ZodULID;
var $ZodXID;
var $ZodKSUID;
var $ZodISODateTime;
var $ZodISODate;
var $ZodISOTime;
var $ZodISODuration;
var $ZodIPv4;
var $ZodIPv6;
var $ZodCIDRv4;
var $ZodCIDRv6;
var $ZodBase64;
var $ZodBase64URL;
var $ZodE164;
var $ZodJWT;
var $ZodUnknown;
var $ZodNever;
var $ZodArray;
var $ZodObject;
var $ZodObjectJIT;
var $ZodUnion;
var $ZodIntersection;
var $ZodEnum;
var $ZodTransform;
var $ZodOptional;
var $ZodExactOptional;
var $ZodNullable;
var $ZodDefault;
var $ZodPrefault;
var $ZodNonOptional;
var $ZodCatch;
var $ZodPipe;
var $ZodReadonly;
var $ZodCustom;
var init_schemas$1 = __esmMin(() => {
  init_checks$1();
  init_core$1();
  init_doc();
  init_parse$1();
  init_regexes();
  init_util$1();
  init_versions();
  $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
    var _a4;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version2;
    const checks = [...inst._zod.def.checks ?? []];
    if (inst._zod.traits.has("$ZodCheck"))
      checks.unshift(inst);
    for (const ch of checks)
      for (const fn of ch._zod.onattach)
        fn(inst);
    if (checks.length === 0) {
      (_a4 = inst._zod).deferred ?? (_a4.deferred = []);
      inst._zod.deferred?.push(() => {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      const runChecks = /* @__PURE__ */ __name((payload, checks2, ctx) => {
        let isAborted = aborted(payload);
        let asyncResult;
        for (const ch of checks2) {
          if (ch._zod.def.when) {
            if (explicitlyAborted(payload))
              continue;
            if (!ch._zod.def.when(payload))
              continue;
          } else if (isAborted)
            continue;
          const currLen = payload.issues.length;
          const _ = ch._zod.check(payload);
          if (_ instanceof Promise && ctx?.async === false)
            throw new $ZodAsyncError();
          if (asyncResult || _ instanceof Promise)
            asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
              await _;
              if (payload.issues.length === currLen)
                return;
              if (!isAborted)
                isAborted = aborted(payload, currLen);
            });
          else {
            if (payload.issues.length === currLen)
              continue;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          }
        }
        if (asyncResult)
          return asyncResult.then(() => {
            return payload;
          });
        return payload;
      }, "runChecks");
      const handleCanaryResult = /* @__PURE__ */ __name((canary, payload, ctx) => {
        if (aborted(canary)) {
          canary.aborted = true;
          return canary;
        }
        const checkResult = runChecks(payload, checks, ctx);
        if (checkResult instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
        }
        return inst._zod.parse(checkResult, ctx);
      }, "handleCanaryResult");
      inst._zod.run = (payload, ctx) => {
        if (ctx.skipChecks)
          return inst._zod.parse(payload, ctx);
        if (ctx.direction === "backward") {
          const canary = inst._zod.parse({
            value: payload.value,
            issues: []
          }, {
            ...ctx,
            skipChecks: true
          });
          if (canary instanceof Promise)
            return canary.then((canary2) => {
              return handleCanaryResult(canary2, payload, ctx);
            });
          return handleCanaryResult(canary, payload, ctx);
        }
        const result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return result.then((result2) => runChecks(result2, checks, ctx));
        }
        return runChecks(result, checks, ctx);
      };
    }
    defineLazy(inst, "~standard", () => ({
      validate: (value) => {
        try {
          const r2 = safeParse$1(inst, value);
          return r2.success ? { value: r2.data } : { issues: r2.error?.issues };
        } catch (_) {
          return safeParseAsync$1(inst, value).then((r2) => r2.success ? { value: r2.data } : { issues: r2.error?.issues });
        }
      },
      vendor: "zod",
      version: 1
    }));
  });
  $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
      if (def.coerce)
        try {
          payload.value = String(payload.value);
        } catch (_2) {
        }
      if (typeof payload.value === "string")
        return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
      const v = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[def.version];
      if (v === void 0)
        throw new Error(`Invalid UUID version: "${def.version}"`);
      def.pattern ?? (def.pattern = uuid(v));
    } else
      def.pattern ?? (def.pattern = uuid());
    $ZodStringFormat.init(inst, def);
  });
  $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
  });
  $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      try {
        const trimmed = payload.value.trim();
        if (!def.normalize && def.protocol?.source === httpProtocol.source) {
          if (!/^https?:\/\//i.test(trimmed)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: payload.value,
              inst,
              continue: !def.abort
            });
            return;
          }
        }
        const url = new URL(trimmed);
        if (def.hostname) {
          def.hostname.lastIndex = 0;
          if (!def.hostname.test(url.hostname))
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: def.hostname.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
        }
        if (def.protocol) {
          def.protocol.lastIndex = 0;
          if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol))
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: def.protocol.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
        }
        if (def.normalize)
          payload.value = url.href;
        else
          payload.value = trimmed;
        return;
      } catch (_) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
  });
  $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
    def.pattern ?? (def.pattern = nanoid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
  });
  $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = datetime$1(def));
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = date$1);
    $ZodStringFormat.init(inst, def);
  });
  $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = time$1(def));
    $ZodStringFormat.init(inst, def);
  });
  $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = duration$1);
    $ZodStringFormat.init(inst, def);
  });
  $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv4`;
  });
  $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv6`;
    inst._zod.check = (payload) => {
      try {
        new URL(`http://[${payload.value}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
  });
  $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      const parts = payload.value.split("/");
      try {
        if (parts.length !== 2)
          throw new Error();
        const [address, prefix] = parts;
        if (!prefix)
          throw new Error();
        const prefixNum = Number(prefix);
        if (`${prefixNum}` !== prefix)
          throw new Error();
        if (prefixNum < 0 || prefixNum > 128)
          throw new Error();
        new URL(`http://[${address}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64";
    inst._zod.check = (payload) => {
      if (isValidBase64(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64url";
    inst._zod.check = (payload) => {
      if (isValidBase64URL(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
  });
  $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (isValidJWT(payload.value, def.alg))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.issues.push({
        expected: "never",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      const proms = [];
      for (let i2 = 0; i2 < input.length; i2++) {
        const item = input[i2];
        const result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise)
          proms.push(result.then((result2) => handleArrayResult(result2, payload, i2)));
        else
          handleArrayResult(result, payload, i2);
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
    $ZodType.init(inst, def);
    if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
      const sh = def.shape;
      Object.defineProperty(def, "shape", { get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", { value: newSh });
        return newSh;
      } });
    }
    const _normalized = cached(() => normalizeDef(def));
    defineLazy(inst._zod, "propValues", () => {
      const shape = def.shape;
      const propValues = {};
      for (const key in shape) {
        const field = shape[key]._zod;
        if (field.values) {
          propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
          for (const v of field.values)
            propValues[key].add(v);
        }
      }
      return propValues;
    });
    const isObject$2 = isObject;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject$2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = {};
      const proms = [];
      const shape = value.shape;
      for (const key of value.keys) {
        const el = shape[key];
        const isOptionalIn = el._zod.optin === "optional";
        const isOptionalOut = el._zod.optout === "optional";
        const r2 = el._zod.run({
          value: input[key],
          issues: []
        }, ctx);
        if (r2 instanceof Promise)
          proms.push(r2.then((r3) => handlePropertyResult(r3, payload, key, input, isOptionalIn, isOptionalOut)));
        else
          handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut);
      }
      if (!catchall)
        return proms.length ? Promise.all(proms).then(() => payload) : payload;
      return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
  });
  $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
    $ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = cached(() => normalizeDef(def));
    const generateFastpass = /* @__PURE__ */ __name((shape) => {
      const doc = new Doc([
        "shape",
        "payload",
        "ctx"
      ]);
      const normalized = _normalized.value;
      const parseStr = /* @__PURE__ */ __name((key) => {
        const k = esc(key);
        return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
      }, "parseStr");
      doc.write(`const input = payload.value;`);
      const ids = /* @__PURE__ */ Object.create(null);
      let counter = 0;
      for (const key of normalized.keys)
        ids[key] = `key_${counter++}`;
      doc.write(`const newResult = {};`);
      for (const key of normalized.keys) {
        const id = ids[key];
        const k = esc(key);
        const schema = shape[key];
        const isOptionalIn = schema?._zod?.optin === "optional";
        const isOptionalOut = schema?._zod?.optout === "optional";
        doc.write(`const ${id} = ${parseStr(key)};`);
        if (isOptionalIn && isOptionalOut)
          doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        else if (!isOptionalIn)
          doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
        else
          doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      }
      doc.write(`payload.value = newResult;`);
      doc.write(`return payload;`);
      const fn = doc.compile();
      return (payload, ctx) => fn(shape, payload, ctx);
    }, "generateFastpass");
    let fastpass;
    const isObject$1 = isObject;
    const jit = !globalConfig.jitless;
    const fastEnabled = jit && allowsEval.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject$1(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
        if (!fastpass)
          fastpass = generateFastpass(def.shape);
        payload = fastpass(payload, ctx);
        if (!catchall)
          return payload;
        return handleCatchall([], input, payload, ctx, value, inst);
      }
      return superParse(payload, ctx);
    };
  });
  $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.options.some((o2) => o2._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", () => def.options.some((o2) => o2._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", () => {
      if (def.options.every((o2) => o2._zod.values))
        return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    });
    defineLazy(inst._zod, "pattern", () => {
      if (def.options.every((o2) => o2._zod.pattern)) {
        const patterns = def.options.map((o2) => o2._zod.pattern);
        return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
      }
    });
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
      if (first)
        return first(payload, ctx);
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          if (result.issues.length === 0)
            return result;
          results.push(result);
        }
      }
      if (!async)
        return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      const left = def.left._zod.run({
        value: input,
        issues: []
      }, ctx);
      const right = def.right._zod.run({
        value: input,
        issues: []
      }, ctx);
      if (left instanceof Promise || right instanceof Promise)
        return Promise.all([left, right]).then(([left2, right2]) => {
          return handleIntersectionResults(payload, left2, right2);
        });
      return handleIntersectionResults(payload, left, right);
    };
  });
  $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o2) => typeof o2 === "string" ? escapeRegex(o2) : o2.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (valuesSet.has(input))
        return payload;
      payload.issues.push({
        code: "invalid_value",
        values,
        input,
        inst
      });
      return payload;
    };
  });
  $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward")
        throw new $ZodEncodeError(inst.constructor.name);
      const _out = def.transform(payload.value, payload);
      if (ctx.async)
        return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
          payload.value = output;
          payload.fallback = true;
          return payload;
        });
      if (_out instanceof Promise)
        throw new $ZodAsyncError();
      payload.value = _out;
      payload.fallback = true;
      return payload;
    };
  });
  $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (def.innerType._zod.optin === "optional") {
        const input = payload.value;
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise)
          return result.then((r2) => handleOptionalResult(r2, input));
        return handleOptionalResult(result, input);
      }
      if (payload.value === void 0)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
    inst._zod.parse = (payload, ctx) => {
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === null)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward")
        return def.innerType._zod.run(payload, ctx);
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
        return payload;
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleDefaultResult(result2, def));
      return handleDefaultResult(result, def);
    };
  });
  $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward")
        return def.innerType._zod.run(payload, ctx);
      if (payload.value === void 0)
        payload.value = def.defaultValue;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => {
      const v = def.innerType._zod.values;
      return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleNonOptionalResult(result2, inst));
      return handleNonOptionalResult(result, inst);
    };
  });
  $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward")
        return def.innerType._zod.run(payload, ctx);
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((result2) => {
          payload.value = result2.value;
          if (result2.issues.length) {
            payload.value = def.catchValue({
              ...payload,
              error: { issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config2())) },
              input: payload.value
            });
            payload.issues = [];
            payload.fallback = true;
          }
          return payload;
        });
      payload.value = result.value;
      if (result.issues.length) {
        payload.value = def.catchValue({
          ...payload,
          error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config2())) },
          input: payload.value
        });
        payload.issues = [];
        payload.fallback = true;
      }
      return payload;
    };
  });
  $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        const right = def.out._zod.run(payload, ctx);
        if (right instanceof Promise)
          return right.then((right2) => handlePipeResult(right2, def.in, ctx));
        return handlePipeResult(right, def.in, ctx);
      }
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise)
        return left.then((left2) => handlePipeResult(left2, def.out, ctx));
      return handlePipeResult(left, def.out, ctx);
    };
  });
  $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
    defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward")
        return def.innerType._zod.run(payload, ctx);
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then(handleReadonlyResult);
      return handleReadonlyResult(result);
    };
  });
  $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
      return payload;
    };
    inst._zod.check = (payload) => {
      const input = payload.value;
      const r2 = def.fn(input);
      if (r2 instanceof Promise)
        return r2.then((r3) => handleRefineResult(r3, payload, input, inst));
      handleRefineResult(r2, payload, input, inst);
    };
  });
});
function registry() {
  return new $ZodRegistry();
}
__name(registry, "registry");
var _a;
var $ZodRegistry;
var globalRegistry;
var init_registries = __esmMin(() => {
  $ZodRegistry = /* @__PURE__ */ __name(class {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap();
      this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
      const meta = _meta[0];
      this._map.set(schema, meta);
      if (meta && typeof meta === "object" && "id" in meta)
        this._idmap.set(meta.id, schema);
      return this;
    }
    clear() {
      this._map = /* @__PURE__ */ new WeakMap();
      this._idmap = /* @__PURE__ */ new Map();
      return this;
    }
    remove(schema) {
      const meta = this._map.get(schema);
      if (meta && typeof meta === "object" && "id" in meta)
        this._idmap.delete(meta.id);
      this._map.delete(schema);
      return this;
    }
    get(schema) {
      const p = schema._zod.parent;
      if (p) {
        const pm = { ...this.get(p) ?? {} };
        delete pm.id;
        const f = {
          ...pm,
          ...this._map.get(schema)
        };
        return Object.keys(f).length ? f : void 0;
      }
      return this._map.get(schema);
    }
    has(schema) {
      return this._map.has(schema);
    }
  }, "$ZodRegistry");
  (_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
  globalRegistry = globalThis.__zod_globalRegistry;
});
function _string(Class, params) {
  return new Class({
    type: "string",
    ...normalizeParams(params)
  });
}
__name(_string, "_string");
function _email(Class, params) {
  return new Class({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_email, "_email");
function _guid(Class, params) {
  return new Class({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_guid, "_guid");
function _uuid(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_uuid, "_uuid");
function _uuidv4(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
__name(_uuidv4, "_uuidv4");
function _uuidv6(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
__name(_uuidv6, "_uuidv6");
function _uuidv7(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
__name(_uuidv7, "_uuidv7");
function _url(Class, params) {
  return new Class({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_url, "_url");
function _emoji(Class, params) {
  return new Class({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_emoji, "_emoji");
function _nanoid(Class, params) {
  return new Class({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_nanoid, "_nanoid");
function _cuid(Class, params) {
  return new Class({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cuid, "_cuid");
function _cuid2(Class, params) {
  return new Class({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cuid2, "_cuid2");
function _ulid(Class, params) {
  return new Class({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ulid, "_ulid");
function _xid(Class, params) {
  return new Class({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_xid, "_xid");
function _ksuid(Class, params) {
  return new Class({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ksuid, "_ksuid");
function _ipv4(Class, params) {
  return new Class({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ipv4, "_ipv4");
function _ipv6(Class, params) {
  return new Class({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_ipv6, "_ipv6");
function _cidrv4(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cidrv4, "_cidrv4");
function _cidrv6(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_cidrv6, "_cidrv6");
function _base64(Class, params) {
  return new Class({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_base64, "_base64");
function _base64url(Class, params) {
  return new Class({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_base64url, "_base64url");
function _e164(Class, params) {
  return new Class({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_e164, "_e164");
function _jwt(Class, params) {
  return new Class({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
__name(_jwt, "_jwt");
function _isoDateTime(Class, params) {
  return new Class({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
__name(_isoDateTime, "_isoDateTime");
function _isoDate(Class, params) {
  return new Class({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
__name(_isoDate, "_isoDate");
function _isoTime(Class, params) {
  return new Class({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
__name(_isoTime, "_isoTime");
function _isoDuration(Class, params) {
  return new Class({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
__name(_isoDuration, "_isoDuration");
function _unknown(Class) {
  return new Class({ type: "unknown" });
}
__name(_unknown, "_unknown");
function _never(Class, params) {
  return new Class({
    type: "never",
    ...normalizeParams(params)
  });
}
__name(_never, "_never");
function _maxLength(maximum, params) {
  return new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
}
__name(_maxLength, "_maxLength");
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
__name(_minLength, "_minLength");
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
__name(_length, "_length");
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
__name(_regex, "_regex");
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
__name(_lowercase, "_lowercase");
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
__name(_uppercase, "_uppercase");
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
__name(_includes, "_includes");
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
__name(_startsWith, "_startsWith");
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
__name(_endsWith, "_endsWith");
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
__name(_overwrite, "_overwrite");
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
__name(_normalize, "_normalize");
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
__name(_trim, "_trim");
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
__name(_toLowerCase, "_toLowerCase");
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
__name(_toUpperCase, "_toUpperCase");
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
__name(_slugify, "_slugify");
function _array(Class, element, params) {
  return new Class({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
__name(_array, "_array");
function _custom(Class, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  return new Class({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
}
__name(_custom, "_custom");
function _refine(Class, fn, _params) {
  return new Class({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
}
__name(_refine, "_refine");
function _superRefine(fn, params) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue$2) => {
      if (typeof issue$2 === "string")
        payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
      else {
        const _issue = issue$2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
__name(_superRefine, "_superRefine");
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
__name(_check, "_check");
var init_api = __esmMin(() => {
  init_checks$1();
  init_util$1();
});
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
__name(initializeContext, "initializeContext");
function process$1(schema, ctx, _params = {
  path: [],
  schemaPath: []
}) {
  var _a4;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    if (_params.schemaPath.includes(schema))
      seen.cycle = _params.path;
    return seen.schema;
  }
  const result = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: _params.path
  };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema)
    result.schema = overrideSchema;
  else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema)
      schema._zod.processJSONSchema(ctx, result.schema, params);
    else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process$1(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    Object.assign(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a4 = result.schema).default ?? (_a4.default = result.schema._prefault);
  delete result.schema._prefault;
  return ctx.seen.get(schema).schema;
}
__name(process$1, "process$1");
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0])
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = /* @__PURE__ */ __name((entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId)
        return { ref: uriGenerator(externalId) };
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return {
        defId: id,
        ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
      };
    }
    if (entry[1] === root)
      return { ref: "#" };
    const defUriPrefix = `#/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return {
      defId,
      ref: defUriPrefix + defId
    };
  }, "makeURI");
  const extractToDef = /* @__PURE__ */ __name((entry) => {
    if (entry[1].schema.$ref)
      return;
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2)
      delete schema2[key];
    schema2.$ref = ref;
  }, "extractToDef");
  if (ctx.cycles === "throw")
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle)
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    if (ctx.metadataRegistry.get(entry[0])?.id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
__name(extractDefs, "extractDefs");
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = /* @__PURE__ */ __name((zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else
        Object.assign(schema2, refSchema);
      Object.assign(schema2, _cached);
      if (zodSchema._zod.parent === ref)
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached))
            delete schema2[key];
        }
      if (refSchema.$ref && refSeen.def)
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key]))
            delete schema2[key];
        }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def)
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key]))
              delete schema2[key];
          }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  }, "flattenRef");
  for (const entry of [...ctx.seen.entries()].reverse())
    flattenRef(entry[0]);
  const result = {};
  if (ctx.target === "draft-2020-12")
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  else if (ctx.target === "draft-07")
    result.$schema = "http://json-schema.org/draft-07/schema#";
  else if (ctx.target === "draft-04")
    result.$schema = "http://json-schema.org/draft-04/schema#";
  else if (ctx.target === "openapi-3.0") {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      if (seen.def.id === seen.defId)
        delete seen.def.id;
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {
  } else if (Object.keys(defs).length > 0)
    if (ctx.target === "draft-2020-12")
      result.$defs = defs;
    else
      result.definitions = defs;
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
__name(finalize, "finalize");
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault")
    return isTransforming(def.innerType, ctx);
  if (def.type === "intersection")
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  if (def.type === "record" || def.type === "map")
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape)
      if (isTransforming(def.shape[key], ctx))
        return true;
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options)
      if (isTransforming(option, ctx))
        return true;
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items)
      if (isTransforming(item, ctx))
        return true;
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
__name(isTransforming, "isTransforming");
var createToJSONSchemaMethod;
var createStandardJSONSchemaMethod;
var init_to_json_schema = __esmMin(() => {
  init_registries();
  createToJSONSchemaMethod = /* @__PURE__ */ __name((schema, processors = {}) => (params) => {
    const ctx = initializeContext({
      ...params,
      processors
    });
    process$1(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
  }, "createToJSONSchemaMethod");
  createStandardJSONSchemaMethod = /* @__PURE__ */ __name((schema, io, processors = {}) => (params) => {
    const { libraryOptions, target } = params ?? {};
    const ctx = initializeContext({
      ...libraryOptions ?? {},
      target,
      io,
      processors
    });
    process$1(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
  }, "createStandardJSONSchemaMethod");
});
var formatMap;
var stringProcessor;
var neverProcessor;
var unknownProcessor;
var enumProcessor;
var customProcessor;
var transformProcessor;
var arrayProcessor;
var objectProcessor;
var unionProcessor;
var intersectionProcessor;
var nullableProcessor;
var nonoptionalProcessor;
var defaultProcessor;
var prefaultProcessor;
var catchProcessor;
var pipeProcessor;
var readonlyProcessor;
var optionalProcessor;
var init_json_schema_processors = __esmMin(() => {
  init_to_json_schema();
  init_util$1();
  formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  };
  stringProcessor = /* @__PURE__ */ __name((schema, ctx, _json, _params) => {
    const json = _json;
    json.type = "string";
    const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
    if (typeof minimum === "number")
      json.minLength = minimum;
    if (typeof maximum === "number")
      json.maxLength = maximum;
    if (format) {
      json.format = formatMap[format] ?? format;
      if (json.format === "")
        delete json.format;
      if (format === "time")
        delete json.format;
    }
    if (contentEncoding)
      json.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
      const regexes = [...patterns];
      if (regexes.length === 1)
        json.pattern = regexes[0].source;
      else if (regexes.length > 1)
        json.allOf = [...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))];
    }
  }, "stringProcessor");
  neverProcessor = /* @__PURE__ */ __name((_schema, _ctx, json, _params) => {
    json.not = {};
  }, "neverProcessor");
  unknownProcessor = /* @__PURE__ */ __name((_schema, _ctx, _json, _params) => {
  }, "unknownProcessor");
  enumProcessor = /* @__PURE__ */ __name((schema, _ctx, json, _params) => {
    const def = schema._zod.def;
    const values = getEnumValues(def.entries);
    if (values.every((v) => typeof v === "number"))
      json.type = "number";
    if (values.every((v) => typeof v === "string"))
      json.type = "string";
    json.enum = values;
  }, "enumProcessor");
  customProcessor = /* @__PURE__ */ __name((_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw")
      throw new Error("Custom types cannot be represented in JSON Schema");
  }, "customProcessor");
  transformProcessor = /* @__PURE__ */ __name((_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw")
      throw new Error("Transforms cannot be represented in JSON Schema");
  }, "transformProcessor");
  arrayProcessor = /* @__PURE__ */ __name((schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number")
      json.minItems = minimum;
    if (typeof maximum === "number")
      json.maxItems = maximum;
    json.type = "array";
    json.items = process$1(def.element, ctx, {
      ...params,
      path: [...params.path, "items"]
    });
  }, "arrayProcessor");
  objectProcessor = /* @__PURE__ */ __name((schema, ctx, _json, params) => {
    const json = _json;
    const def = schema._zod.def;
    json.type = "object";
    json.properties = {};
    const shape = def.shape;
    for (const key in shape)
      json.properties[key] = process$1(shape[key], ctx, {
        ...params,
        path: [
          ...params.path,
          "properties",
          key
        ]
      });
    const allKeys = new Set(Object.keys(shape));
    const requiredKeys = new Set([...allKeys].filter((key) => {
      const v = def.shape[key]._zod;
      if (ctx.io === "input")
        return v.optin === void 0;
      else
        return v.optout === void 0;
    }));
    if (requiredKeys.size > 0)
      json.required = Array.from(requiredKeys);
    if (def.catchall?._zod.def.type === "never")
      json.additionalProperties = false;
    else if (!def.catchall) {
      if (ctx.io === "output")
        json.additionalProperties = false;
    } else if (def.catchall)
      json.additionalProperties = process$1(def.catchall, ctx, {
        ...params,
        path: [...params.path, "additionalProperties"]
      });
  }, "objectProcessor");
  unionProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    const isExclusive = def.inclusive === false;
    const options = def.options.map((x, i2) => process$1(x, ctx, {
      ...params,
      path: [
        ...params.path,
        isExclusive ? "oneOf" : "anyOf",
        i2
      ]
    }));
    if (isExclusive)
      json.oneOf = options;
    else
      json.anyOf = options;
  }, "unionProcessor");
  intersectionProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    const a2 = process$1(def.left, ctx, {
      ...params,
      path: [
        ...params.path,
        "allOf",
        0
      ]
    });
    const b = process$1(def.right, ctx, {
      ...params,
      path: [
        ...params.path,
        "allOf",
        1
      ]
    });
    const isSimpleIntersection = /* @__PURE__ */ __name((val) => "allOf" in val && Object.keys(val).length === 1, "isSimpleIntersection");
    json.allOf = [...isSimpleIntersection(a2) ? a2.allOf : [a2], ...isSimpleIntersection(b) ? b.allOf : [b]];
  }, "intersectionProcessor");
  nullableProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    const inner = process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    if (ctx.target === "openapi-3.0") {
      seen.ref = def.innerType;
      json.nullable = true;
    } else
      json.anyOf = [inner, { type: "null" }];
  }, "nullableProcessor");
  nonoptionalProcessor = /* @__PURE__ */ __name((schema, ctx, _json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
  }, "nonoptionalProcessor");
  defaultProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json.default = JSON.parse(JSON.stringify(def.defaultValue));
  }, "defaultProcessor");
  prefaultProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    if (ctx.io === "input")
      json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
  }, "prefaultProcessor");
  catchProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    let catchValue;
    try {
      catchValue = def.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    json.default = catchValue;
  }, "catchProcessor");
  pipeProcessor = /* @__PURE__ */ __name((schema, ctx, _json, params) => {
    const def = schema._zod.def;
    const inIsTransform = def.in._zod.traits.has("$ZodTransform");
    const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
    process$1(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
  }, "pipeProcessor");
  readonlyProcessor = /* @__PURE__ */ __name((schema, ctx, json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json.readOnly = true;
  }, "readonlyProcessor");
  optionalProcessor = /* @__PURE__ */ __name((schema, ctx, _json, params) => {
    const def = schema._zod.def;
    process$1(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
  }, "optionalProcessor");
});
var init_core = __esmMin(() => {
  init_core$1();
  init_parse$1();
  init_errors$1();
  init_schemas$1();
  init_checks$1();
  init_versions();
  init_util$1();
  init_regexes();
  init_registries();
  init_doc();
  init_api();
  init_to_json_schema();
  init_json_schema_processors();
  init_to_json_schema();
});
var init_checks = __esmMin(() => {
  init_core();
});
function datetime(params) {
  return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
__name(datetime, "datetime");
function date(params) {
  return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
__name(date, "date");
function time3(params) {
  return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
__name(time3, "time");
function duration(params) {
  return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
__name(duration, "duration");
var ZodISODateTime;
var ZodISODate;
var ZodISOTime;
var ZodISODuration;
var init_iso = __esmMin(() => {
  init_core();
  init_schemas();
  ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
});
var initializer;
var ZodRealError;
var init_errors = __esmMin(() => {
  init_core();
  init_util$1();
  initializer = /* @__PURE__ */ __name((inst, issues) => {
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
      format: { value: (mapper) => formatError(inst, mapper) },
      flatten: { value: (mapper) => flattenError(inst, mapper) },
      addIssue: { value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      } },
      addIssues: { value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      } },
      isEmpty: { get() {
        return inst.issues.length === 0;
      } }
    });
  }, "initializer");
  ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer, { Parent: Error });
});
var parse$1;
var parseAsync;
var safeParse;
var safeParseAsync;
var encode;
var decode$1;
var encodeAsync;
var decodeAsync;
var safeEncode;
var safeDecode;
var safeEncodeAsync;
var safeDecodeAsync;
var init_parse = __esmMin(() => {
  init_core();
  init_errors();
  parse$1 = /* @__PURE__ */ _parse(ZodRealError);
  parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
  safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
  safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
  encode = /* @__PURE__ */ _encode(ZodRealError);
  decode$1 = /* @__PURE__ */ _decode(ZodRealError);
  encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
  decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
  safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
  safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
  safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
  safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
});
function _installLazyMethods(inst, group3, methods) {
  const proto = Object.getPrototypeOf(inst);
  let installed = _installedGroups.get(proto);
  if (!installed) {
    installed = /* @__PURE__ */ new Set();
    _installedGroups.set(proto, installed);
  }
  if (installed.has(group3))
    return;
  installed.add(group3);
  for (const key in methods) {
    const fn = methods[key];
    Object.defineProperty(proto, key, {
      configurable: true,
      enumerable: false,
      get() {
        const bound = fn.bind(this);
        Object.defineProperty(this, key, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: bound
        });
        return bound;
      },
      set(v) {
        Object.defineProperty(this, key, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: v
        });
      }
    });
  }
}
__name(_installLazyMethods, "_installLazyMethods");
function string(params) {
  return /* @__PURE__ */ _string(ZodString, params);
}
__name(string, "string");
function unknown() {
  return /* @__PURE__ */ _unknown(ZodUnknown);
}
__name(unknown, "unknown");
function never(params) {
  return /* @__PURE__ */ _never(ZodNever, params);
}
__name(never, "never");
function array(element, params) {
  return /* @__PURE__ */ _array(ZodArray, element, params);
}
__name(array, "array");
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodObject(def);
}
__name(object, "object");
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
__name(union, "union");
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
__name(intersection, "intersection");
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
__name(_enum, "_enum");
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
__name(transform, "transform");
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
__name(optional, "optional");
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
__name(exactOptional, "exactOptional");
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
__name(nullable, "nullable");
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
__name(_default, "_default");
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
__name(prefault, "prefault");
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
__name(nonoptional, "nonoptional");
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
__name(_catch, "_catch");
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
__name(pipe, "pipe");
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
__name(readonly, "readonly");
function custom(fn, _params) {
  return /* @__PURE__ */ _custom(ZodCustom, fn ?? (() => true), _params);
}
__name(custom, "custom");
function refine(fn, _params = {}) {
  return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
__name(refine, "refine");
function superRefine(fn, params) {
  return /* @__PURE__ */ _superRefine(fn, params);
}
__name(superRefine, "superRefine");
var _installedGroups;
var ZodType;
var _ZodString;
var ZodString;
var ZodStringFormat;
var ZodEmail;
var ZodGUID;
var ZodUUID;
var ZodURL;
var ZodEmoji;
var ZodNanoID;
var ZodCUID;
var ZodCUID2;
var ZodULID;
var ZodXID;
var ZodKSUID;
var ZodIPv4;
var ZodIPv6;
var ZodCIDRv4;
var ZodCIDRv6;
var ZodBase64;
var ZodBase64URL;
var ZodE164;
var ZodJWT;
var ZodUnknown;
var ZodNever;
var ZodArray;
var ZodObject;
var ZodUnion;
var ZodIntersection;
var ZodEnum;
var ZodTransform;
var ZodOptional;
var ZodExactOptional;
var ZodNullable;
var ZodDefault;
var ZodPrefault;
var ZodNonOptional;
var ZodCatch;
var ZodPipe;
var ZodReadonly;
var ZodCustom;
var init_schemas = __esmMin(() => {
  init_core();
  init_json_schema_processors();
  init_to_json_schema();
  init_checks();
  init_iso();
  init_parse();
  _installedGroups = /* @__PURE__ */ new WeakMap();
  ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
    $ZodType.init(inst, def);
    Object.assign(inst["~standard"], { jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    } });
    inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
    inst.def = def;
    inst.type = def.type;
    Object.defineProperty(inst, "_def", { value: def });
    inst.parse = (data, params) => parse$1(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => safeParse(inst, data, params);
    inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.encode = (data, params) => encode(inst, data, params);
    inst.decode = (data, params) => decode$1(inst, data, params);
    inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
    inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
    inst.safeEncode = (data, params) => safeEncode(inst, data, params);
    inst.safeDecode = (data, params) => safeDecode(inst, data, params);
    inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
    inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
    _installLazyMethods(inst, "ZodType", {
      check(...chks) {
        const def2 = this.def;
        return this.clone(mergeDefs(def2, { checks: [...def2.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
          check: ch,
          def: { check: "custom" },
          onattach: []
        } } : ch)] }), { parent: true });
      },
      with(...chks) {
        return this.check(...chks);
      },
      clone(def2, params) {
        return clone(this, def2, params);
      },
      brand() {
        return this;
      },
      register(reg, meta) {
        reg.add(this, meta);
        return this;
      },
      refine(check, params) {
        return this.check(refine(check, params));
      },
      superRefine(refinement, params) {
        return this.check(superRefine(refinement, params));
      },
      overwrite(fn) {
        return this.check(/* @__PURE__ */ _overwrite(fn));
      },
      optional() {
        return optional(this);
      },
      exactOptional() {
        return exactOptional(this);
      },
      nullable() {
        return nullable(this);
      },
      nullish() {
        return optional(nullable(this));
      },
      nonoptional(params) {
        return nonoptional(this, params);
      },
      array() {
        return array(this);
      },
      or(arg) {
        return union([this, arg]);
      },
      and(arg) {
        return intersection(this, arg);
      },
      transform(tx) {
        return pipe(this, transform(tx));
      },
      default(d) {
        return _default(this, d);
      },
      prefault(d) {
        return prefault(this, d);
      },
      catch(params) {
        return _catch(this, params);
      },
      pipe(target) {
        return pipe(this, target);
      },
      readonly() {
        return readonly(this);
      },
      describe(description) {
        const cl = this.clone();
        globalRegistry.add(cl, { description });
        return cl;
      },
      meta(...args) {
        if (args.length === 0)
          return globalRegistry.get(this);
        const cl = this.clone();
        globalRegistry.add(cl, args[0]);
        return cl;
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(fn) {
        return fn(this);
      }
    });
    Object.defineProperty(inst, "description", {
      get() {
        return globalRegistry.get(inst)?.description;
      },
      configurable: true
    });
    return inst;
  });
  _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    _installLazyMethods(inst, "_ZodString", {
      regex(...args) {
        return this.check(/* @__PURE__ */ _regex(...args));
      },
      includes(...args) {
        return this.check(/* @__PURE__ */ _includes(...args));
      },
      startsWith(...args) {
        return this.check(/* @__PURE__ */ _startsWith(...args));
      },
      endsWith(...args) {
        return this.check(/* @__PURE__ */ _endsWith(...args));
      },
      min(...args) {
        return this.check(/* @__PURE__ */ _minLength(...args));
      },
      max(...args) {
        return this.check(/* @__PURE__ */ _maxLength(...args));
      },
      length(...args) {
        return this.check(/* @__PURE__ */ _length(...args));
      },
      nonempty(...args) {
        return this.check(/* @__PURE__ */ _minLength(1, ...args));
      },
      lowercase(params) {
        return this.check(/* @__PURE__ */ _lowercase(params));
      },
      uppercase(params) {
        return this.check(/* @__PURE__ */ _uppercase(params));
      },
      trim() {
        return this.check(/* @__PURE__ */ _trim());
      },
      normalize(...args) {
        return this.check(/* @__PURE__ */ _normalize(...args));
      },
      toLowerCase() {
        return this.check(/* @__PURE__ */ _toLowerCase());
      },
      toUpperCase() {
        return this.check(/* @__PURE__ */ _toUpperCase());
      },
      slugify() {
        return this.check(/* @__PURE__ */ _slugify());
      }
    });
  });
  ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
    inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
    inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
    inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
    inst.datetime = (params) => inst.check(datetime(params));
    inst.date = (params) => inst.check(date(params));
    inst.time = (params) => inst.check(time3(params));
    inst.duration = (params) => inst.check(duration(params));
  });
  ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  });
  ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
  });
  ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
  });
  ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
    inst.element = def.element;
    _installLazyMethods(inst, "ZodArray", {
      min(n2, params) {
        return this.check(/* @__PURE__ */ _minLength(n2, params));
      },
      nonempty(params) {
        return this.check(/* @__PURE__ */ _minLength(1, params));
      },
      max(n2, params) {
        return this.check(/* @__PURE__ */ _maxLength(n2, params));
      },
      length(n2, params) {
        return this.check(/* @__PURE__ */ _length(n2, params));
      },
      unwrap() {
        return this.element;
      }
    });
  });
  ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
    $ZodObjectJIT.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
    defineLazy(inst, "shape", () => {
      return def.shape;
    });
    _installLazyMethods(inst, "ZodObject", {
      keyof() {
        return _enum(Object.keys(this._zod.def.shape));
      },
      catchall(catchall) {
        return this.clone({
          ...this._zod.def,
          catchall
        });
      },
      passthrough() {
        return this.clone({
          ...this._zod.def,
          catchall: unknown()
        });
      },
      loose() {
        return this.clone({
          ...this._zod.def,
          catchall: unknown()
        });
      },
      strict() {
        return this.clone({
          ...this._zod.def,
          catchall: never()
        });
      },
      strip() {
        return this.clone({
          ...this._zod.def,
          catchall: void 0
        });
      },
      extend(incoming) {
        return extend(this, incoming);
      },
      safeExtend(incoming) {
        return safeExtend(this, incoming);
      },
      merge(other) {
        return merge(this, other);
      },
      pick(mask) {
        return pick(this, mask);
      },
      omit(mask) {
        return omit(this, mask);
      },
      partial(...args) {
        return partial(ZodOptional, this, args[0]);
      },
      required(...args) {
        return required(ZodNonOptional, this, args[0]);
      }
    });
  });
  ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
    inst.options = def.options;
  });
  ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
  });
  ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
      const newEntries = {};
      for (const value of values)
        if (keys.has(value))
          newEntries[value] = def.entries[value];
        else
          throw new Error(`Key ${value} not found in enum`);
      return new ZodEnum({
        ...def,
        checks: [],
        ...normalizeParams(params),
        entries: newEntries
      });
    };
    inst.exclude = (values, params) => {
      const newEntries = { ...def.entries };
      for (const value of values)
        if (keys.has(value))
          delete newEntries[value];
        else
          throw new Error(`Key ${value} not found in enum`);
      return new ZodEnum({
        ...def,
        checks: [],
        ...normalizeParams(params),
        entries: newEntries
      });
    };
  });
  ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
    inst._zod.parse = (payload, _ctx) => {
      if (_ctx.direction === "backward")
        throw new $ZodEncodeError(inst.constructor.name);
      payload.addIssue = (issue$1) => {
        if (typeof issue$1 === "string")
          payload.issues.push(issue(issue$1, payload.value, def));
        else {
          const _issue = issue$1;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = inst);
          payload.issues.push(issue(_issue));
        }
      };
      const output = def.transform(payload.value, payload);
      if (output instanceof Promise)
        return output.then((output2) => {
          payload.value = output2;
          payload.fallback = true;
          return payload;
        });
      payload.value = output;
      payload.fallback = true;
      return payload;
    };
  });
  ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
    $ZodExactOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
  });
  ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
  });
  ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
    inst.in = def.in;
    inst.out = def.out;
  });
  ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
  });
});
var ZodIssueCode;
var ZodFirstPartyTypeKind;
var init_compat = __esmMin(() => {
  init_core();
  ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom"
  };
  ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {});
});
var init_external = __esmMin(() => {
  init_core();
  init_schemas();
  init_checks();
  init_errors();
  init_parse();
  init_compat();
  init_json_schema_processors();
  init_registries();
  init_checks();
  init_iso();
  init_schemas();
  init_util$1();
});
var init_classic = __esmMin(() => {
  init_external();
});
var init_v4 = __esmMin(() => {
  init_classic();
});
var ALGORITHMS;
var ALGORITHM_VALUES;
var cspHashSchema;
var CSP_KINDS;
var cspKindSchema;
var ATTRIBUTE_ALLOWED_RESOURCES;
var ALLOWED_DIRECTIVES;
var init_config = __esmMin(() => {
  init_v4();
  ALGORITHMS = {
    "SHA-256": "sha256-",
    "SHA-384": "sha384-",
    "SHA-512": "sha512-"
  };
  ALGORITHM_VALUES = Object.values(ALGORITHMS);
  _enum(Object.keys(ALGORITHMS)).optional().default("SHA-256");
  cspHashSchema = custom((value) => {
    if (typeof value !== "string")
      return false;
    return ALGORITHM_VALUES.some((allowedValue) => {
      return value.startsWith(allowedValue);
    });
  });
  CSP_KINDS = [
    "element",
    "attribute",
    "default"
  ];
  cspKindSchema = _enum(CSP_KINDS);
  ATTRIBUTE_ALLOWED_RESOURCES = [
    "'none'",
    "'unsafe-hashes'",
    "'unsafe-inline'",
    "'report-sample'"
  ];
  union([string(), object({
    resource: string(),
    kind: cspKindSchema
  })]).superRefine((value, ctx) => {
    const resource = typeof value === "string" ? value : value.resource;
    const kind = typeof value === "string" ? "default" : value.kind;
    if (kind === "element" && resource === "'unsafe-hashes'")
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: `The source \`'unsafe-hashes'\` is not valid for \`element\` resources (it is rejected by \`script-src-elem\`/\`style-src-elem\`).`,
        fatal: true
      });
    else if (kind === "attribute" && !ATTRIBUTE_ALLOWED_RESOURCES.includes(resource))
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: `The source \`${resource}\` is not valid for \`attribute\` resources. \`script-src-attr\`/\`style-src-attr\` only accept: ${ATTRIBUTE_ALLOWED_RESOURCES.join(", ")}.`,
        fatal: true
      });
  });
  union([cspHashSchema, object({
    hash: cspHashSchema,
    kind: cspKindSchema
  })]);
  ALLOWED_DIRECTIVES = [
    "base-uri",
    "child-src",
    "connect-src",
    "default-src",
    "fenced-frame-src",
    "font-src",
    "form-action",
    "frame-ancestors",
    "frame-src",
    "img-src",
    "manifest-src",
    "media-src",
    "object-src",
    "referrer",
    "report-to",
    "report-uri",
    "require-trusted-types-for",
    "sandbox",
    "trusted-types",
    "upgrade-insecure-requests",
    "worker-src"
  ];
  custom((v) => typeof v === "string").superRefine((value, ctx) => {
    if (!ALLOWED_DIRECTIVES.some((allowedValue) => {
      return value.startsWith(allowedValue);
    }))
      if (value.startsWith("script-src") || value.startsWith("style-src"))
        ctx.addIssue({
          code: ZodIssueCode.custom,
          message: `Directives \`script-src\` and \`style-src\` (including their \`-elem\`/\`-attr\` variants) are not allowed in \`security.csp.directives\`. Please use \`security.csp.scriptDirective\` and \`security.csp.styleDirective\` instead, scoping resources/hashes to the more specific directives with the \`kind\` option (\`"element"\` or \`"attribute"\`).`,
          fatal: true
        });
      else
        ctx.addIssue({
          code: ZodIssueCode.custom,
          message: `Invalid directive: "${value}". Allowed directives are: ${ALLOWED_DIRECTIVES.join(", ")}`,
          fatal: true
        });
  });
});
async function decodeKey(encoded) {
  const bytes = decodeBase64(encoded);
  return crypto.subtle.importKey("raw", bytes.buffer, ALGORITHM, true, ["encrypt", "decrypt"]);
}
__name(decodeKey, "decodeKey");
async function encryptString(key, raw, additionalData) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH / 2));
  const data = encoder$1.encode(raw);
  const params = {
    name: ALGORITHM,
    iv
  };
  if (additionalData)
    params.additionalData = encoder$1.encode(additionalData);
  const buffer2 = await crypto.subtle.encrypt(params, key, data);
  return encodeHexUpperCase(iv) + encodeBase64(new Uint8Array(buffer2));
}
__name(encryptString, "encryptString");
async function decryptString(key, encoded, additionalData) {
  const iv = decodeHex(encoded.slice(0, IV_LENGTH));
  const dataArray = decodeBase64(encoded.slice(IV_LENGTH));
  const params = {
    name: ALGORITHM,
    iv
  };
  if (additionalData)
    params.additionalData = encoder$1.encode(additionalData);
  const decryptedBuffer = await crypto.subtle.decrypt(params, key, dataArray);
  return decoder$1.decode(decryptedBuffer);
}
__name(decryptString, "decryptString");
async function generateCspDigest(data, algorithm) {
  const hashBuffer = await crypto.subtle.digest(algorithm, encoder$1.encode(data));
  const hash = encodeBase64(new Uint8Array(hashBuffer));
  return `${ALGORITHMS[algorithm]}${hash}`;
}
__name(generateCspDigest, "generateCspDigest");
var ALGORITHM;
var encoder$1;
var decoder$1;
var IV_LENGTH;
var init_encryption = __esmMin(() => {
  init_dist();
  init_config();
  ALGORITHM = "AES-GCM";
  encoder$1 = new TextEncoder();
  decoder$1 = new TextDecoder();
  IV_LENGTH = 24;
});
var SERVER_ISLAND_START;
var init_server_islands_shared = __esmMin(() => {
  SERVER_ISLAND_START = "[if astro]>server-island-start<![endif]";
});
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && obj !== null && !!obj[renderTemplateResultSym];
}
__name(isRenderTemplateResult, "isRenderTemplateResult");
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
__name(renderTemplate, "renderTemplate");
var renderTemplateResultSym;
var RenderTemplateResult;
var init_render_template = __esmMin(() => {
  init_escape();
  init_util$3();
  init_any();
  init_util$2();
  renderTemplateResultSym = /* @__PURE__ */ Symbol.for("astro.renderTemplateResult");
  RenderTemplateResult = /* @__PURE__ */ __name(class {
    [renderTemplateResultSym] = true;
    htmlParts;
    expressions;
    error;
    constructor(htmlParts, expressions) {
      this.htmlParts = htmlParts;
      this.error = void 0;
      this.expressions = expressions.map((expression) => {
        if (isPromise(expression))
          return Promise.resolve(expression).catch((err) => {
            if (!this.error) {
              this.error = err;
              throw err;
            }
          });
        return expression;
      });
    }
    render(destination) {
      const { htmlParts, expressions } = this;
      for (let i2 = 0; i2 < htmlParts.length; i2++) {
        const html = htmlParts[i2];
        if (html)
          destination.write(markHTMLString(html));
        if (i2 >= expressions.length)
          break;
        const exp = expressions[i2];
        if (!(exp || exp === 0))
          continue;
        const result = renderChild(destination, exp);
        if (isPromise(result)) {
          const startIdx = i2 + 1;
          const remaining = expressions.length - startIdx;
          const flushers = new Array(remaining);
          for (let j = 0; j < remaining; j++) {
            const rExp = expressions[startIdx + j];
            flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
              if (rExp || rExp === 0)
                return renderChild(bufferDestination, rExp);
            });
          }
          return result.then(() => {
            let k = 0;
            const iterate = /* @__PURE__ */ __name(() => {
              while (k < flushers.length) {
                const rHtml = htmlParts[startIdx + k];
                if (rHtml)
                  destination.write(markHTMLString(rHtml));
                const flushResult = flushers[k++].flush();
                if (isPromise(flushResult))
                  return flushResult.then(iterate);
              }
              const lastHtml = htmlParts[htmlParts.length - 1];
              if (lastHtml)
                destination.write(markHTMLString(lastHtml));
            }, "iterate");
            return iterate();
          });
        }
      }
    }
  }, "RenderTemplateResult");
});
function isSlotString(str) {
  return !!str[slotString];
}
__name(isSlotString, "isSlotString");
function mergeSlotInstructions(target, source) {
  if (source.instructions?.length) {
    target ??= [];
    target.push(...source.instructions);
  }
  return target;
}
__name(mergeSlotInstructions, "mergeSlotInstructions");
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback)
    return renderSlot(result, fallback);
  return { async render(destination) {
    await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
  } };
}
__name(renderSlot, "renderSlot");
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const chunks = [];
  await renderSlot(result, slotted, fallback).render({ write(chunk) {
    if (chunk instanceof SlotString) {
      content += chunk;
      if (chunk.chunks.length)
        chunks.push(...chunk.chunks);
      instructions = mergeSlotInstructions(instructions, chunk);
    } else if (chunk instanceof Response)
      return;
    else if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string")
      if (isScriptInstruction(chunk))
        chunks.push(chunk);
      else {
        if (instructions === null)
          instructions = [];
        instructions.push(chunk);
      }
    else {
      const str = chunkToString(result, chunk);
      content += str;
      chunks.push(str);
    }
  } });
  return markHTMLString(new SlotString(content, instructions, chunks));
}
__name(renderSlotToString, "renderSlotToString");
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots)
    await Promise.all(Object.entries(slots).map(([key, value]) => renderSlotToString(result, value).then((output) => {
      if (output.instructions) {
        if (slotInstructions === null)
          slotInstructions = [];
        slotInstructions.push(...output.instructions);
      }
      if (output.chunks) {
        for (const part of output.chunks)
          if (typeof part !== "string") {
            if (slotInstructions === null)
              slotInstructions = [];
            slotInstructions.push(part);
          }
      }
      children[key] = output;
    })));
  return {
    slotInstructions,
    children
  };
}
__name(renderSlots, "renderSlots");
function createSlotValueFromString(content) {
  return function() {
    return renderTemplate`${unescapeHTML(content)}`;
  };
}
__name(createSlotValueFromString, "createSlotValueFromString");
var slotString;
var SlotString;
var init_slot = __esmMin(() => {
  init_escape();
  init_any();
  init_render_template();
  init_common();
  init_instruction();
  slotString = /* @__PURE__ */ Symbol.for("astro:slot-string");
  SlotString = /* @__PURE__ */ __name(class extends HTMLString {
    instructions;
    /**
    * The slot's content as an ordered stream. Unlike `instructions` (which holds
    * position-independent instructions like head/hydration content), scripts are
    * kept inline here so they render at their original position instead of being
    * hoisted to the start of the slot output.
    */
    chunks;
    [slotString];
    constructor(content, instructions, chunks = []) {
      super(content);
      this.instructions = instructions;
      this.chunks = chunks;
      this[slotString] = true;
    }
  }, "SlotString");
});
function containsServerDirective(props) {
  return "server:component-directive" in props;
}
__name(containsServerDirective, "containsServerDirective");
function createSearchParams(encryptedComponentExport, encryptedProps, slots) {
  const params = new URLSearchParams();
  params.set("e", encryptedComponentExport);
  params.set("p", encryptedProps);
  params.set("s", slots);
  return params;
}
__name(createSearchParams, "createSearchParams");
function isWithinURLLimit(pathname, params) {
  return (pathname + "?" + params.toString()).length < 2048;
}
__name(isWithinURLLimit, "isWithinURLLimit");
var internalProps;
var ServerIslandComponent;
var renderServerIslandRuntime;
var SERVER_ISLAND_REPLACER;
var init_server_islands = __esmMin(() => {
  init_encryption();
  init_escape();
  init_any();
  init_head_and_content();
  init_instruction();
  init_server_islands_shared();
  init_slot();
  init_util$2();
  internalProps = /* @__PURE__ */ new Set([
    "server:component-path",
    "server:component-export",
    "server:component-directive",
    "server:defer"
  ]);
  ServerIslandComponent = /* @__PURE__ */ __name(class {
    result;
    props;
    slots;
    displayName;
    hostId;
    islandContent;
    componentPath;
    componentExport;
    componentId;
    constructor(result, props, slots, displayName) {
      this.result = result;
      this.props = props;
      this.slots = slots;
      this.displayName = displayName;
    }
    async init() {
      const content = await this.getIslandContent();
      if (this.result.cspDestination) {
        this.result._metadata.extraScriptHashes.push(await generateCspDigest(SERVER_ISLAND_REPLACER, this.result.cspAlgorithm));
        const contentDigest = await generateCspDigest(content, this.result.cspAlgorithm);
        this.result._metadata.extraScriptHashes.push(contentDigest);
      }
      return createThinHead();
    }
    async render(destination) {
      const hostId = await this.getHostId();
      const islandContent = await this.getIslandContent();
      destination.write(createRenderInstruction({ type: "server-island-runtime" }));
      destination.write(`<!--${SERVER_ISLAND_START}-->`);
      for (const name in this.slots)
        if (name === "fallback")
          await renderChild(destination, this.slots.fallback(this.result));
      destination.write(`<script type="module" data-astro-rerun data-island-id="${hostId}">${islandContent}<\/script>`);
    }
    getComponentPath() {
      if (this.componentPath)
        return this.componentPath;
      const componentPath = this.props["server:component-path"];
      if (!componentPath)
        throw new Error(`Could not find server component path`);
      this.componentPath = componentPath;
      return componentPath;
    }
    getComponentExport() {
      if (this.componentExport)
        return this.componentExport;
      const componentExport = this.props["server:component-export"];
      if (!componentExport)
        throw new Error(`Could not find server component export`);
      this.componentExport = componentExport;
      return componentExport;
    }
    async getHostId() {
      if (!this.hostId)
        this.hostId = await crypto.randomUUID();
      return this.hostId;
    }
    async getIslandContent() {
      if (this.islandContent)
        return this.islandContent;
      const componentPath = this.getComponentPath();
      const componentExport = this.getComponentExport();
      let componentId = (await this.result.getServerIslandNameMap()).get(componentPath);
      if (!componentId)
        throw new Error(`Could not find server component name ${componentPath}`);
      for (const key2 of Object.keys(this.props))
        if (internalProps.has(key2))
          delete this.props[key2];
      const renderedSlots = {};
      for (const name in this.slots)
        if (name !== "fallback") {
          const content = await renderSlotToString(this.result, this.slots[name]);
          const slotContent = content;
          let slotHtml = "";
          if (slotContent.chunks?.length)
            for (const part of slotContent.chunks)
              slotHtml += typeof part === "string" ? part : part.content;
          else
            slotHtml = content.toString();
          renderedSlots[name] = slotHtml;
        }
      const key = await this.result.key;
      const componentExportEncrypted = await encryptString(key, componentExport, `export:${componentId}`);
      const propsEncrypted = Object.keys(this.props).length === 0 ? "" : await encryptString(key, JSON.stringify(this.props), `props:${componentId}`);
      const slotsEncrypted = Object.keys(renderedSlots).length === 0 ? "" : await encryptString(key, JSON.stringify(renderedSlots), `slots:${componentId}`);
      const hostId = await this.getHostId();
      const slash2 = this.result.base.endsWith("/") ? "" : "/";
      let serverIslandUrl = `${this.result.base}${slash2}_server-islands/${componentId}${this.result.trailingSlash === "always" ? "/" : ""}`;
      const potentialSearchParams = createSearchParams(componentExportEncrypted, propsEncrypted, slotsEncrypted);
      const useGETRequest = isWithinURLLimit(serverIslandUrl, potentialSearchParams);
      if (useGETRequest) {
        serverIslandUrl += "?" + potentialSearchParams.toString();
        this.result._metadata.extraHead.push(markHTMLString(`<link rel="preload" as="fetch" href="${toAttributeString(serverIslandUrl)}" crossorigin="anonymous">`));
      }
      const headersJson = stringifyForScript(this.result.internalFetchHeaders || {});
      const serverIslandUrlJson = stringifyForScript(serverIslandUrl);
      const method = useGETRequest ? `const headers = new Headers(${headersJson});
let response = await fetch(${serverIslandUrlJson}, { headers });` : `let data = {
	encryptedComponentExport: ${stringifyForScript(componentExportEncrypted)},
	encryptedProps: ${stringifyForScript(propsEncrypted)},
	encryptedSlots: ${stringifyForScript(slotsEncrypted)},
};
const headers = new Headers({ 'Content-Type': 'application/json', ...${headersJson} });
let response = await fetch(${serverIslandUrlJson}, {
	method: 'POST',
	body: JSON.stringify(data),
	headers,
});`;
      this.islandContent = `${method}replaceServerIsland(${stringifyForScript(hostId)}, response);`;
      return this.islandContent;
    }
  }, "ServerIslandComponent");
  renderServerIslandRuntime = /* @__PURE__ */ __name(() => {
    return `<script>${SERVER_ISLAND_REPLACER}<\/script>`;
  }, "renderServerIslandRuntime");
  SERVER_ISLAND_REPLACER = markHTMLString(`async function replaceServerIsland(id, r) {
	let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
	// If there's no matching script, or the request fails then return
	if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
	// Load the HTML before modifying the DOM in case of errors
	let html = await r.text();
	// Remove any placeholder content before the island script
	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '${SERVER_ISLAND_START}')
		s.previousSibling.remove();
	s.previousSibling?.remove();
	// Insert the new HTML
	s.before(document.createRange().createContextualFragment(html));
	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
	s.remove();
}`.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("//")).join(" "));
});
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        const needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        const needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        if (needsHydrationScript)
          return markHTMLString(getPrescripts(result, "both", hydration.directive));
        else if (needsDirectiveScript)
          return markHTMLString(getPrescripts(result, "directive", hydration.directive));
        else
          return "";
      }
      case "head":
        if (!shouldRenderInstruction("head", getInstructionRenderState(result)))
          return "";
        return renderAllHeadContent(result);
      case "maybe-head":
        if (!shouldRenderInstruction("maybe-head", getInstructionRenderState(result)))
          return "";
        return renderAllHeadContent(result);
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (result._metadata.templateDepth > 0)
          return instruction.render();
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      case "server-island-runtime":
        if (result._metadata.templateDepth > 0)
          return renderServerIslandRuntime();
        if (result._metadata.hasRenderedServerIslandRuntime)
          return "";
        result._metadata.hasRenderedServerIslandRuntime = true;
        return renderServerIslandRuntime();
      case "script": {
        const { id, content } = instruction;
        if (result._metadata.templateDepth > 0)
          return content;
        if (result._metadata.renderedScripts.has(id))
          return "";
        result._metadata.renderedScripts.add(id);
        return content;
      }
      case "template-enter":
        result._metadata.templateDepth++;
        return "";
      case "template-exit":
        if (result._metadata.templateDepth <= 0)
          throw new Error("Unexpected template-exit instruction without a matching template-enter. This may indicate that the compiler emitted unbalanced template boundaries, or that a component manually injected a template-exit render instruction.");
        result._metadata.templateDepth--;
        return "";
      default:
        throw new Error(`Unknown chunk type: ${chunk.type}`);
    }
  } else if (chunk instanceof Response)
    return "";
  else if (isSlotString(chunk)) {
    let out = "";
    const c = chunk;
    if (c.instructions)
      for (const instr of c.instructions)
        out += stringifyChunk(result, instr);
    if (c.chunks.length)
      for (const part of c.chunks)
        out += typeof part === "string" ? part : stringifyChunk(result, part);
    else
      out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
__name(stringifyChunk, "stringifyChunk");
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk))
    return decoder.decode(chunk);
  else
    return stringifyChunk(result, chunk);
}
__name(chunkToString, "chunkToString");
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk))
    return chunk;
  else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
__name(chunkToByteArray, "chunkToByteArray");
function chunkToByteArrayOrString(result, chunk) {
  if (ArrayBuffer.isView(chunk))
    return chunk;
  else
    return stringifyChunk(result, chunk).toString();
}
__name(chunkToByteArrayOrString, "chunkToByteArrayOrString");
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
__name(isRenderInstance, "isRenderInstance");
var Fragment;
var Renderer;
var encoder;
var decoder;
var init_common = __esmMin(() => {
  init_escape();
  init_scripts();
  init_runtime$1();
  init_head();
  init_instruction();
  init_server_islands();
  init_slot();
  Fragment = /* @__PURE__ */ Symbol.for("astro:fragment");
  Renderer = /* @__PURE__ */ Symbol.for("astro:renderer");
  encoder = new TextEncoder();
  decoder = new TextDecoder();
});
function renderChild(destination, child) {
  if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
    return;
  }
  if (isPromise(child))
    return child.then((x) => renderChild(destination, x));
  if (child instanceof SlotString) {
    destination.write(child);
    return;
  }
  if (isHTMLString(child)) {
    destination.write(child);
    return;
  }
  if (!child && child !== 0)
    return;
  if (Array.isArray(child))
    return renderArray(destination, child);
  if (typeof child === "function")
    return renderChild(destination, child());
  if (isRenderInstance(child))
    return child.render(destination);
  if (isRenderTemplateResult(child))
    return child.render(destination);
  if (isAstroComponentInstance(child))
    return child.render(destination);
  if (ArrayBuffer.isView(child)) {
    destination.write(child);
    return;
  }
  if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    if (Symbol.asyncIterator in child)
      return renderAsyncIterable(destination, child);
    return renderIterable(destination, child);
  }
  destination.write(child);
}
__name(renderChild, "renderChild");
function renderArray(destination, children) {
  for (let i2 = 0; i2 < children.length; i2++) {
    const result = renderChild(destination, children[i2]);
    if (isPromise(result)) {
      if (i2 + 1 >= children.length)
        return result;
      const remaining = children.length - i2 - 1;
      const flushers = new Array(remaining);
      for (let j = 0; j < remaining; j++)
        flushers[j] = createBufferedRenderer(destination, (bufferDestination) => {
          return renderChild(bufferDestination, children[i2 + 1 + j]);
        });
      return result.then(() => {
        let k = 0;
        const iterate = /* @__PURE__ */ __name(() => {
          while (k < flushers.length) {
            const flushResult = flushers[k++].flush();
            if (isPromise(flushResult))
              return flushResult.then(iterate);
          }
        }, "iterate");
        return iterate();
      });
    }
  }
}
__name(renderArray, "renderArray");
function renderIterable(destination, children) {
  const iterator = children[Symbol.iterator]();
  const iterate = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value, done } = iterator.next();
      if (done)
        break;
      const result = renderChild(destination, value);
      if (isPromise(result))
        return result.then(iterate);
    }
  }, "iterate");
  return iterate();
}
__name(renderIterable, "renderIterable");
async function renderAsyncIterable(destination, children) {
  for await (const value of children)
    await renderChild(destination, value);
}
__name(renderAsyncIterable, "renderAsyncIterable");
var init_any = __esmMin(() => {
  init_escape();
  init_util$3();
  init_astro();
  init_common();
  init_slot();
  init_util$2();
});
function validateComponentProps(props, clientDirectives, displayName) {
  if (props != null) {
    const directives = [...clientDirectives.keys()].map((directive) => `client:${directive}`);
    for (const prop of Object.keys(props))
      if (directives.includes(prop))
        console.warn(`You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
  }
}
__name(validateComponentProps, "validateComponentProps");
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, result.clientDirectives, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  registerIfPropagating(result, factory, instance);
  return instance;
}
__name(createAstroComponentInstance, "createAstroComponentInstance");
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && obj !== null && !!obj[astroComponentInstanceSym];
}
__name(isAstroComponentInstance, "isAstroComponentInstance");
var astroComponentInstanceSym;
var AstroComponentInstance;
var init_instance = __esmMin(() => {
  init_util$3();
  init_any();
  init_runtime$1();
  init_head_and_content();
  astroComponentInstanceSym = /* @__PURE__ */ Symbol.for("astro.componentInstance");
  AstroComponentInstance = /* @__PURE__ */ __name(class {
    [astroComponentInstanceSym] = true;
    result;
    props;
    slotValues;
    factory;
    returnValue;
    constructor(result, props, slots, factory) {
      this.result = result;
      this.props = props;
      this.factory = factory;
      this.slotValues = {};
      for (const name in slots) {
        let didRender = false;
        let value = slots[name](result);
        if (result._metadata.routeHasPropagation && isPromise(value))
          result._metadata.pendingSlotEvaluations.push(value);
        this.slotValues[name] = () => {
          if (!didRender) {
            didRender = true;
            return value;
          }
          return slots[name](result);
        };
      }
    }
    init(result) {
      if (this.returnValue !== void 0)
        return this.returnValue;
      this.returnValue = this.factory(result, this.props, this.slotValues);
      if (isPromise(this.returnValue))
        this.returnValue.then((resolved) => {
          this.returnValue = resolved;
        }).catch(() => {
        });
      return this.returnValue;
    }
    render(destination) {
      const returnValue = this.init(this.result);
      if (isPromise(returnValue))
        return returnValue.then((x) => this.renderImpl(destination, x));
      return this.renderImpl(destination, returnValue);
    }
    renderImpl(destination, returnValue) {
      if (isHeadAndContent(returnValue))
        return returnValue.content.render(destination);
      else
        return renderChild(destination, returnValue);
    }
  }, "AstroComponentInstance");
});
async function renderStreaming(root, result, destination) {
  const stack = [root];
  const openTagCache = /* @__PURE__ */ new Map();
  const closeTagCache = /* @__PURE__ */ new Map();
  const closeTagFor = /* @__PURE__ */ __name((type) => {
    let tag = closeTagCache.get(type);
    if (tag === void 0) {
      tag = new HTMLString(`</${type}>`);
      closeTagCache.set(type, tag);
    }
    return tag;
  }, "closeTagFor");
  let batch = "";
  let buffered = false;
  let firstAsync = null;
  const tail = [];
  let tailStatic = "";
  const emitStatic = /* @__PURE__ */ __name((s2) => {
    if (!s2)
      return;
    if (buffered)
      tailStatic += s2;
    else
      batch += s2;
  }, "emitStatic");
  const flushTailStatic = /* @__PURE__ */ __name(() => {
    if (tailStatic) {
      tail.push(tailStatic);
      tailStatic = "";
    }
  }, "flushTailStatic");
  const renderDynamic = /* @__PURE__ */ __name((node) => (d) => {
    if (isVNode(node))
      return renderJSX(result, node).then((out) => renderChild(d, out));
    return renderChild(d, node);
  }, "renderDynamic");
  const handleVNode = /* @__PURE__ */ __name((vnode) => {
    const type = vnode.type;
    if (!type)
      throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
    if (type === Fragment) {
      stack.push(vnode.props?.children);
      return;
    }
    if (isAstroComponentFactory(type)) {
      const props = {};
      const slots = {};
      for (const [key, value] of Object.entries(vnode.props ?? {}))
        if (key === "children" || value && typeof value === "object" && value["$$slot"])
          slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
        else
          props[key] = value;
      const displayName = type.name || "Anonymous";
      if (containsServerDirective(props)) {
        const island = new ServerIslandComponent(result, props, slots, displayName);
        result._metadata.propagators.add(island);
        stack.push(island);
        return;
      }
      stack.push(createAstroComponentInstance(result, displayName, type, props, slots));
      return;
    }
    if (typeof type === "string" && type !== ClientOnlyPlaceholder$1) {
      const props = vnode.props;
      let hasAttrs = false;
      if (props) {
        for (const key in props)
          if (key !== "children") {
            hasAttrs = true;
            break;
          }
      }
      const children = props?.children;
      const isVoid = (children == null || children === "") && voidElementNames.test(type);
      if (!hasAttrs) {
        const key = isVoid ? `${type}/` : type;
        let openTag = openTagCache.get(key);
        if (openTag === void 0) {
          openTag = isVoid ? `<${type}/>` : `<${type}>`;
          openTagCache.set(key, openTag);
        }
        emitStatic(openTag);
        if (!isVoid)
          stack.push(closeTagFor(type));
      } else {
        const { children: _children, ...attrsProps } = props ?? {};
        const attrs = spreadAttributes(attrsProps);
        if (isVoid) {
          emitStatic(`<${type}${attrs}/>`);
          return;
        }
        emitStatic(`<${type}${attrs}>`);
        stack.push(markHTMLString(`</${type}>`));
      }
      if (!isVoid && children != null && children !== "")
        if (typeof children === "string" && (type === "style" || type === "script"))
          stack.push(markHTMLString(children));
        else
          stack.push(children);
      return;
    }
    if (typeof type === "function" && vnode.props?.["server:root"]) {
      stack.push(type(vnode.props ?? {}));
      return;
    }
    stack.push(renderJSX(result, vnode));
  }, "handleVNode");
  while (stack.length > 0) {
    const node = stack.pop();
    if (node == null || node === false)
      continue;
    if (node instanceof TemplateFrame) {
      const htmlParts = node.templateResult.htmlParts;
      const expressions = node.templateResult.expressions;
      let i2 = node.cursor;
      while (i2 < htmlParts.length) {
        if (htmlParts[i2])
          emitStatic(htmlParts[i2]);
        if (i2 >= expressions.length)
          break;
        const expression = expressions[i2];
        i2++;
        if (expression == null || expression === false)
          continue;
        const expressionType = typeof expression;
        if (expressionType === "string") {
          emitStatic(escapeHTML(expression));
          continue;
        }
        if (expressionType === "number" || expressionType === "bigint" || expressionType === "boolean") {
          emitStatic(String(expression));
          continue;
        }
        if (expression instanceof HTMLString || isHTMLString(expression)) {
          emitStatic(expression.toString());
          continue;
        }
        node.storeCursor(i2);
        stack.push(node);
        stack.push(expression);
        break;
      }
      continue;
    }
    const nodeType = typeof node;
    if (nodeType === "string") {
      emitStatic(escapeHTML(node));
      continue;
    }
    if (nodeType === "number" || nodeType === "bigint" || nodeType === "boolean") {
      emitStatic(String(node));
      continue;
    }
    if (node instanceof HTMLString || isHTMLString(node)) {
      emitStatic(node.toString());
      continue;
    }
    if (Array.isArray(node)) {
      for (let i2 = node.length - 1; i2 >= 0; i2--)
        stack.push(node[i2]);
      continue;
    }
    if (isRenderTemplateResult(node)) {
      stack.push(new TemplateFrame(node));
      continue;
    }
    if (isVNode(node)) {
      handleVNode(node);
      continue;
    }
    if (!buffered) {
      if (batch) {
        destination.write(markHTMLString(batch));
        batch = "";
      }
      const rendered = renderDynamic(node)(destination);
      if (isPromise(rendered)) {
        buffered = true;
        firstAsync = rendered;
      }
    } else {
      flushTailStatic();
      tail.push(createBufferedRenderer(destination, renderDynamic(node)));
    }
  }
  if (!buffered) {
    if (batch)
      destination.write(markHTMLString(batch));
    return;
  }
  await firstAsync;
  flushTailStatic();
  for (const seg of tail)
    if (typeof seg === "string")
      destination.write(markHTMLString(seg));
    else {
      const r2 = seg.flush();
      if (isPromise(r2))
        await r2;
    }
}
__name(renderStreaming, "renderStreaming");
var ClientOnlyPlaceholder$1;
var TemplateFrame;
var init_streaming = __esmMin(() => {
  init_jsx_runtime();
  init_escape();
  init_server();
  init_util$3();
  init_jsx();
  init_any();
  init_common();
  init_util$2();
  init_factory();
  init_instance();
  init_render_template();
  init_server_islands();
  ClientOnlyPlaceholder$1 = "astro-client-only";
  TemplateFrame = /* @__PURE__ */ __name(class {
    /** The RenderTemplateResult this frame walks. */
    templateResult;
    /** Resume position: the next `htmlParts`/`expressions` index to process. */
    cursor;
    constructor(templateResult) {
      this.templateResult = templateResult;
      this.cursor = 0;
    }
    storeCursor(index) {
      this.cursor = index;
    }
  }, "TemplateFrame");
});
async function renderStreamToString(result, templateResult, isPage) {
  let str = "";
  let renderedFirstPageChunk = false;
  if (isPage)
    await bufferHeadContent(result);
  await renderStreaming(templateResult, result, { write(chunk) {
    if (isPage && !renderedFirstPageChunk) {
      renderedFirstPageChunk = true;
      if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
        const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
        str += doctype;
      }
    }
    if (chunk instanceof Response)
      return;
    str += chunkToString(result, chunk);
  } });
  return str;
}
__name(renderStreamToString, "renderStreamToString");
async function renderStreamToStream(result, templateResult, isPage, route) {
  let renderedFirstPageChunk = false;
  if (isPage)
    await bufferHeadContent(result);
  return new ReadableStream({
    start(controller) {
      const destination = { write(chunk) {
        if (isPage && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            controller.enqueue(encoder.encode(doctype));
          }
        }
        if (chunk instanceof Response)
          throw new AstroError({ ...ResponseSentError });
        const bytes = chunkToByteArray(result, chunk);
        controller.enqueue(bytes);
      } };
      (async () => {
        try {
          await renderStreaming(templateResult, result, destination);
          controller.close();
        } catch (e2) {
          if (AstroError.is(e2) && !e2.loc)
            e2.setLocation({ file: route?.component });
          setTimeout(() => controller.error(e2), 0);
        }
      })();
    },
    cancel() {
      result.cancelled = true;
    }
  });
}
__name(renderStreamToStream, "renderStreamToStream");
async function renderStreamToAsyncIterable(result, templateResult, isPage, _route) {
  let renderedFirstPageChunk = false;
  let error4 = null;
  let next = null;
  const buffer2 = [];
  let renderingComplete = false;
  if (isPage)
    await bufferHeadContent(result);
  const iterator = {
    async next() {
      if (result.cancelled)
        return {
          done: true,
          value: void 0
        };
      if (next !== null)
        await next.promise;
      else if (!renderingComplete && !buffer2.length) {
        next = promiseWithResolvers();
        await next.promise;
      }
      if (!renderingComplete)
        next = promiseWithResolvers();
      if (error4)
        throw error4;
      let length = 0;
      let stringToEncode = "";
      for (let i2 = 0, len = buffer2.length; i2 < len; i2++) {
        const bufferEntry = buffer2[i2];
        if (typeof bufferEntry === "string") {
          const nextIsString = i2 + 1 < len && typeof buffer2[i2 + 1] === "string";
          stringToEncode += bufferEntry;
          if (!nextIsString) {
            const encoded = encoder.encode(stringToEncode);
            length += encoded.length;
            stringToEncode = "";
            buffer2[i2] = encoded;
          } else
            buffer2[i2] = "";
        } else
          length += bufferEntry.length;
      }
      const mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i2 = 0, len = buffer2.length; i2 < len; i2++) {
        const item = buffer2[i2];
        if (item === "")
          continue;
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer2.length = 0;
      return {
        done: length === 0 && renderingComplete,
        value: mergedArray
      };
    },
    async return() {
      result.cancelled = true;
      return {
        done: true,
        value: void 0
      };
    }
  };
  const destination = { write(chunk) {
    if (isPage && !renderedFirstPageChunk) {
      renderedFirstPageChunk = true;
      if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
        const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
        buffer2.push(encoder.encode(doctype));
      }
    }
    if (chunk instanceof Response)
      throw new AstroError(ResponseSentError);
    const bytes = chunkToByteArrayOrString(result, chunk);
    if (bytes.length > 0) {
      buffer2.push(bytes);
      next?.resolve();
    } else if (buffer2.length > 0)
      next?.resolve();
  } };
  toPromise(() => renderStreaming(templateResult, result, destination)).catch((err) => {
    error4 = err;
  }).finally(() => {
    renderingComplete = true;
    next?.resolve();
  });
  return { [Symbol.asyncIterator]() {
    return iterator;
  } };
}
__name(renderStreamToAsyncIterable, "renderStreamToAsyncIterable");
async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route);
  if (templateResult instanceof Response)
    return templateResult;
  return await renderStreamToString(result, templateResult, isPage);
}
__name(renderToString, "renderToString");
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route);
  if (templateResult instanceof Response)
    return templateResult;
  return await renderStreamToStream(result, templateResult, isPage, route);
}
__name(renderToReadableStream, "renderToReadableStream");
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response)
    return factoryResult;
  else if (isHeadAndContent(factoryResult)) {
    if (!isRenderTemplateResult(factoryResult.content))
      throw new AstroError({
        ...OnlyResponseCanBeReturned,
        message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
        location: { file: route?.component }
      });
    return factoryResult.content;
  } else if (!isRenderTemplateResult(factoryResult))
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: { file: route?.component }
    });
  return factoryResult;
}
__name(callComponentAsTemplateResultOrResponse, "callComponentAsTemplateResultOrResponse");
async function bufferHeadContent(result) {
  await bufferPropagatedHead(result);
}
__name(bufferHeadContent, "bufferHeadContent");
async function renderToAsyncIterable(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route);
  if (templateResult instanceof Response)
    return templateResult;
  return await renderStreamToAsyncIterable(result, templateResult, isPage, route);
}
__name(renderToAsyncIterable, "renderToAsyncIterable");
function toPromise(fn) {
  try {
    const result = fn();
    return isPromise(result) ? result : Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}
__name(toPromise, "toPromise");
var DOCTYPE_EXP;
var init_render$2 = __esmMin(() => {
  init_errors$2();
  init_util$3();
  init_common();
  init_util$2();
  init_runtime$1();
  init_streaming();
  init_head_and_content();
  init_render_template();
  DOCTYPE_EXP = /<!doctype html/i;
});
var init_astro = __esmMin(() => {
  init_instance();
  init_render$2();
  init_render_template();
});
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
__name(componentIsHTMLElement, "componentIsHTMLElement");
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    if (INVALID_ATTR_NAME_CHAR.test(attr))
      continue;
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(`<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`);
}
__name(renderHTMLElement, "renderHTMLElement");
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  return constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
}
__name(getHTMLElementName, "getHTMLElementName");
var init_dom = __esmMin(() => {
  init_escape();
  init_slot();
  init_util$2();
});
function guessRenderers(componentUrl) {
  switch (componentUrl?.split(".").pop()) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue (jsx)"
      ];
    case void 0:
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
__name(guessRenderers, "guessRenderers");
function isFragmentComponent(Component) {
  return Component === Fragment;
}
__name(isFragmentComponent, "isFragmentComponent");
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
__name(isHTMLComponent, "isHTMLComponent");
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
__name(removeStaticAstroSlot, "removeStaticAstroSlot");
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && "client:only" in _props === false)
    throw new Error(`Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(_props, clientDirectives);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error4;
      for (const r2 of renderers2)
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children, metadata)) {
            renderer = r2;
            break;
          }
        } catch (e2) {
          error4 ??= e2;
        }
      if (!renderer && error4)
        throw error4;
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(result, Component, _props, slots);
      return { render(destination) {
        destination.write(output);
      } };
    }
  } else {
    if (metadata.hydrateArgs) {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName))
        renderer = renderers2.find(({ name }) => name === `@astrojs/${rendererName}` || name === rendererName);
    }
    if (!renderer && validRenderers.length === 1)
      renderer = validRenderers[0];
    if (!renderer) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer = renderers2.find(({ name }) => name === `@astrojs/${extname}` || name === extname);
    }
    if (!renderer && metadata.hydrateArgs) {
      const rendererName = metadata.hydrateArgs;
      if (typeof rendererName === "string")
        renderer = renderers2.find(({ name }) => name === rendererName);
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        const plural = validRenderers.length > 1;
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(metadata.displayName, metadata?.componentUrl?.split(".").pop(), plural, validRenderers.length),
          hint: NoMatchingRenderer.hint(formatList(probableRendererNames.map((r2) => "`" + r2 + "`")))
        });
      } else
        throw new AstroError({
          ...NoClientOnlyHint,
          message: NoClientOnlyHint.message(metadata.displayName),
          hint: NoClientOnlyHint.hint(probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|"))
        });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter((r2) => probableRendererNames.includes(r2.name));
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0)
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(metadata.displayName, metadata?.componentUrl?.split(".").pop(), plural, validRenderers.length),
          hint: NoMatchingRenderer.hint(formatList(probableRendererNames.map((r2) => "`" + r2 + "`")))
        });
      else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, propsWithoutTransitionAttributes, children, metadata));
      } else
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.
3. If using multiple JSX frameworks at the same time (e.g. React + Preact), pass the correct \`include\`/\`exclude\` options to integrations.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
    }
  } else if (metadata.hydrate === "only")
    html = await renderSlotToString(result, slots?.fallback);
  else {
    performance.now();
    ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, propsWithoutTransitionAttributes, children, metadata));
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(props, true, Tag)}${markHTMLString(childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`)}`;
    html = "";
    await renderTemplateResult.render({ write(chunk) {
      if (chunk instanceof Response)
        return;
      html += chunkToString(result, chunk);
    } });
  }
  if (!hydration)
    return { render(destination) {
      if (slotInstructions)
        for (const instruction of slotInstructions)
          destination.write(instruction);
      if (isPage || renderer?.name === "astro:jsx")
        destination.write(html);
      else if (html && html.length > 0)
        destination.write(markHTMLString(removeStaticAstroSlot(html, renderer?.ssr?.supportsAstroStaticSlot)));
    } };
  const astroId = shorthash(`<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(props, metadata)}`);
  const island = await generateHydrateScript({
    renderer,
    result,
    astroId,
    props,
    attrs
  }, metadata);
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0)
      for (const key of Object.keys(children)) {
        let tagName = renderer?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${escapeHTML(key)}">`;
        if (!html.includes(expectedHTML))
          unrenderedSlots.push(key);
      }
  } else
    unrenderedSlots = Object.keys(children);
  const template2 = unrenderedSlots.length > 0 ? unrenderedSlots.map((key) => `<template data-astro-template${key !== "default" ? `="${escapeHTML(key)}"` : ""}>${children[key]}</template>`).join("") : "";
  island.children = `${html ?? ""}${template2}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return { render(destination) {
    if (slotInstructions)
      for (const instruction of slotInstructions)
        destination.write(instruction);
    destination.write(createRenderInstruction({
      type: "directive",
      hydration
    }));
    if (hydration.directive !== "only" && renderer?.ssr.renderHydrationScript)
      destination.write(createRenderInstruction({
        type: "renderer-hydration-script",
        rendererName: renderer.name,
        render: renderer.ssr.renderHydrationScript
      }));
    const renderedElement = renderElement$1("astro-island", island, false);
    destination.write(markHTMLString(renderedElement));
  } };
}
__name(renderFrameworkComponent, "renderFrameworkComponent");
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
__name(sanitizeElementName, "sanitizeElementName");
function renderFragmentComponent(result, slots = {}) {
  const slot = slots?.default;
  const preRendered = slot?.(result);
  return { render(destination) {
    if (preRendered == null)
      return;
    return renderChild(destination, preRendered);
  } };
}
__name(renderFragmentComponent, "renderFragmentComponent");
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return { render(destination) {
    destination.write(markHTMLString(hydrationHtml + html));
  } };
}
__name(renderHTMLComponent, "renderHTMLComponent");
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  if (containsServerDirective(props)) {
    const serverIslandComponent = new ServerIslandComponent(result, props, slots, displayName);
    result._metadata.propagators.add(serverIslandComponent);
    return serverIslandComponent;
  }
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return { render(destination) {
    return instance.render(destination);
  } };
}
__name(renderAstroComponent, "renderAstroComponent");
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component))
    return Component.catch(handleCancellation).then((x) => {
      return renderComponent(result, displayName, x, props, slots);
    });
  if (isFragmentComponent(Component))
    return renderFragmentComponent(result, slots);
  props = normalizeProps(props);
  if (isHTMLComponent(Component))
    return renderHTMLComponent(result, Component, props, slots).catch(handleCancellation);
  if (isAstroComponentFactory(Component))
    return renderAstroComponent(result, displayName, Component, props, slots);
  return renderFrameworkComponent(result, displayName, Component, props, slots).catch(handleCancellation);
  function handleCancellation(e2) {
    if (result.cancelled)
      return { render() {
      } };
    throw e2;
  }
  __name(handleCancellation, "handleCancellation");
}
__name(renderComponent, "renderComponent");
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "")
      delete props["class"];
  }
  return props;
}
__name(normalizeProps, "normalizeProps");
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (isPage && !result.partial && nonAstroPageNeedsHeadInjection(Component))
    head += chunkToString(result, maybeRenderHead());
  try {
    const destination = { write(chunk) {
      if (isPage && !result.partial && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!/<!doctype html/i.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype + head;
        }
      }
      if (chunk instanceof Response)
        return;
      str += chunkToString(result, chunk);
    } };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    if (containsServerDirective(props))
      await bufferHeadContent(result);
    await renderInstance.render(destination);
  } catch (e2) {
    if (AstroError.is(e2) && !e2.loc)
      e2.setLocation({ file: route?.component });
    throw e2;
  }
  return str;
}
__name(renderComponentToString, "renderComponentToString");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
__name(nonAstroPageNeedsHeadInjection, "nonAstroPageNeedsHeadInjection");
var needsHeadRenderingSymbol;
var rendererAliases;
var clientOnlyValues;
var ASTRO_SLOT_EXP;
var ASTRO_STATIC_SLOT_EXP;
var init_component$1 = __esmMin(() => {
  init_clsx();
  init_errors$2();
  init_escape();
  init_hydration();
  init_serialize();
  init_shorthash();
  init_util$3();
  init_factory();
  init_astro();
  init_instance();
  init_render$2();
  init_common();
  init_dom();
  init_head();
  init_instruction();
  init_server_islands();
  init_any();
  init_slot();
  init_util$2();
  needsHeadRenderingSymbol = /* @__PURE__ */ Symbol.for("astro.needsHeadRendering");
  rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
  clientOnlyValues = /* @__PURE__ */ new Set([
    "solid-js",
    "react",
    "preact",
    "vue",
    "svelte"
  ]);
  ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
  ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
});
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "")
        return "";
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode): {
      const renderedItems = await Promise.all(vnode.map((v) => renderJSX(result, v)));
      let instructions = null;
      let content = "";
      for (const item of renderedItems)
        if (item instanceof SlotString) {
          content += item;
          instructions = mergeSlotInstructions(instructions, item);
        } else
          content += item;
      if (instructions)
        return markHTMLString(new SlotString(content, instructions));
      return markHTMLString(content);
    }
  }
  return renderJSXVNode(result, vnode);
}
__name(renderJSX, "renderJSX");
async function renderJSXVNode(result, vnode) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type:
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case vnode.type === /* @__PURE__ */ Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case isAstroComponentFactory(vnode.type): {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {}))
          if (key === "children" || value && typeof value === "object" && value["$$slot"])
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          else
            props[key] = value;
        return markHTMLString(await renderComponentToString(result, vnode.type.name, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder && !vnode.type.includes("-")):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = /* @__PURE__ */ __name(function(child) {
        if (Array.isArray(child))
          return child.map((c) => extractSlots2(c));
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props && !isCustomElement2) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      }, "extractSlots2");
      if (typeof vnode.type === "function" && vnode.props["server:root"])
        return await renderJSX(result, await vnode.type(vnode.props ?? {}));
      if (typeof vnode.type === "function")
        if (vnode.props[hasTriedRenderComponentSymbol]) {
          delete vnode.props[hasTriedRenderComponentSymbol];
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2?.["astro:jsx"] || !output2)
            return await renderJSXVNode(result, output2);
          else
            return;
        } else
          vnode.props[hasTriedRenderComponentSymbol] = true;
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = { default: [] };
      const isCustomElement2 = typeof vnode.type === "string" && vnode.type.includes("-");
      extractSlots2(children);
      for (const [key, value] of Object.entries(props))
        if (value?.["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots))
        slotPromises.push(renderJSX(result, value).then((output2) => {
          if (output2.toString().trim().length === 0)
            return;
          slots[key] = () => output2;
        }));
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"])
        output = await renderComponentToString(result, vnode.props["client:display-name"] ?? "", null, props, slots);
      else
        output = await renderComponentToString(result, typeof vnode.type === "function" ? vnode.type.name : vnode.type, vnode.type, props, slots);
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
__name(renderJSXVNode, "renderJSXVNode");
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(`<${tag}${spreadAttributes(props)}${markHTMLString((children == null || children === "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`)}`);
}
__name(renderElement, "renderElement");
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script"))
    return markHTMLString(children);
  else
    return children;
}
__name(prerenderElementChildren, "prerenderElementChildren");
var ClientOnlyPlaceholder;
var hasTriedRenderComponentSymbol;
var init_jsx = __esmMin(() => {
  init_jsx_runtime();
  init_server();
  init_factory();
  init_component$1();
  init_slot();
  ClientOnlyPlaceholder = "astro-client-only";
  hasTriedRenderComponentSymbol = /* @__PURE__ */ Symbol("hasTriedRenderComponent");
});
async function renderPage(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const nonAstroMeta = result.componentMetadata.get(componentFactory.moduleId);
    result._metadata.headInTree = nonAstroMeta?.containsHead ?? false;
    result._metadata.routeHasPropagation = isPropagatingHint(nonAstroMeta?.propagation ?? "none");
    const pageProps = {
      ...props ?? {},
      "server:root": true
    };
    const str = await renderComponentToString(result, componentFactory.name, componentFactory, pageProps, {}, true, route);
    const bytes = encoder.encode(str);
    const headers2 = new Headers([["Content-Type", "text/html"], ["Content-Length", bytes.byteLength.toString()]]);
    if (result.shouldInjectCspMetaTags && (result.cspDestination === "header" || result.cspDestination === "adapter"))
      headers2.set("content-security-policy", renderCspContent(result));
    return new Response(bytes, {
      headers: headers2,
      status: result.response.status
    });
  }
  const pageMeta = result.componentMetadata.get(componentFactory.moduleId);
  result._metadata.headInTree = pageMeta?.containsHead ?? false;
  result._metadata.routeHasPropagation = isPropagatingHint(pageMeta?.propagation ?? "none");
  let body;
  if (streaming)
    if (isNode && !isDeno)
      body = await renderToAsyncIterable(result, componentFactory, props, children, true, route);
    else
      body = await renderToReadableStream(result, componentFactory, props, children, true, route);
  else
    body = await renderToString(result, componentFactory, props, children, true, route);
  if (body instanceof Response)
    return body;
  const init = result.response;
  const headers = new Headers(init.headers);
  if (result.shouldInjectCspMetaTags && result.cspDestination === "header" || result.cspDestination === "adapter")
    headers.set("content-security-policy", renderCspContent(result));
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  let status = init.status;
  let statusText = init.statusText;
  if (route?.route && isRoute404(route.route)) {
    status = 404;
    if (statusText === "OK")
      statusText = "Not Found";
  } else if (route?.route && isRoute500(route.route)) {
    status = 500;
    if (statusText === "OK")
      statusText = "Internal Server Error";
  }
  if (status)
    return new Response(body, {
      ...init,
      headers,
      status,
      statusText
    });
  else
    return new Response(body, {
      ...init,
      headers
    });
}
__name(renderPage, "renderPage");
var init_page = __esmMin(() => {
  init_route_errors();
  init_resolver();
  init_render$2();
  init_common();
  init_component$1();
  init_csp();
  init_util$2();
  init_factory();
});
var init_tags = __esmMin(() => {
  init_util$2();
});
var init_render$1 = __esmMin(() => {
  init_astro();
  init_common();
  init_component$1();
  init_dom();
  init_head();
  init_page();
  init_slot();
  init_streaming();
  init_tags();
  init_util$2();
});
var init_transition = __esmMin(() => {
  init_escape();
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
  "-0123456789_".split("").reduce((v, c) => (v[c.charCodeAt(0)] = c, v), []);
});
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName)
    if (typeof values.class !== "undefined")
      values.class += ` ${scopedClassName}`;
    else if (typeof values["class:list"] !== "undefined")
      values["class:list"] = [values["class:list"], scopedClassName];
    else
      values.class = scopedClassName;
  for (const [key, value] of Object.entries(values))
    output += addAttribute(value, key, true, _name);
  return markHTMLString(output);
}
__name(spreadAttributes, "spreadAttributes");
var init_server = __esmMin(() => {
  init_astro_global();
  init_endpoint$1();
  init_escape();
  init_jsx();
  init_render$1();
  init_transition();
});
function getFunctionExpression(slot) {
  if (!slot)
    return;
  const expressions = slot?.expressions?.filter((e2) => isRenderInstruction(e2) === false || isRenderTemplateResult(e2));
  if (expressions?.length !== 1)
    return;
  const expression = expressions[0];
  if (isRenderTemplateResult(expression))
    return getFunctionExpression(expression);
  return expression;
}
__name(getFunctionExpression, "getFunctionExpression");
var Slots;
var init_slots = __esmMin(() => {
  init_server();
  init_jsx();
  init_astro();
  init_render$1();
  init_instruction();
  init_errors$2();
  Slots = /* @__PURE__ */ __name(class {
    #result;
    #slots;
    #logger;
    constructor(result, slots, logger) {
      this.#result = result;
      this.#slots = slots;
      this.#logger = logger;
      if (slots)
        for (const key of Object.keys(slots)) {
          if (this[key] !== void 0)
            throw new AstroError({
              ...ReservedSlotName,
              message: ReservedSlotName.message(key)
            });
          Object.defineProperty(this, key, {
            get() {
              return true;
            },
            enumerable: true
          });
        }
    }
    has(name) {
      if (!this.#slots)
        return false;
      return Boolean(this.#slots[name]);
    }
    async render(name, args = []) {
      if (!this.#slots || !this.has(name))
        return;
      const result = this.#result;
      if (!Array.isArray(args))
        this.#logger.warn(null, `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as an item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
      else if (args.length > 0) {
        const slotValue = this.#slots[name];
        const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
        const expression = getFunctionExpression(component);
        if (expression) {
          const slot = /* @__PURE__ */ __name(async () => typeof expression === "function" ? expression(...args) : expression, "slot");
          return await renderSlotToString(result, slot).then((res) => {
            return res;
          });
        }
        if (typeof component === "function")
          return await renderJSX(result, component(...args)).then((res) => res != null ? String(res) : res);
      }
      return chunkToString(result, await renderSlotToString(result, this.#slots[name]));
    }
  }, "Slots");
});
var init_render = __esmMin(() => {
  init_base_pipeline();
  init_params_and_props();
  init_slots();
});
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore":
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
  }
}
__name(shouldAppendForwardSlash, "shouldAppendForwardSlash");
var init_util = __esmMin(() => {
});
function createRequest({ url, headers, method = "GET", body = void 0, logger, isPrerendered = false, routePattern, init }) {
  const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(Object.entries(headers).filter(([name]) => !name.startsWith(":")));
  if (typeof url === "string")
    url = new URL(url);
  if (isPrerendered)
    url.search = "";
  const request = new Request(url, {
    method,
    headers: headersObj,
    body: isPrerendered ? null : body,
    ...init
  });
  if (isPrerendered) {
    let _headers = request.headers;
    const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
    Object.defineProperty(request, "headers", {
      ...headersDesc,
      get() {
        logger.warn(null, `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`);
        return _headers;
      },
      set(newHeaders) {
        _headers = newHeaders;
      }
    });
  }
  return request;
}
__name(createRequest, "createRequest");
var init_request = __esmMin(() => {
});
function validateAndDecodePathname(pathname) {
  let decoded;
  try {
    decoded = decodeURI(pathname);
  } catch (_e) {
    throw new Error("Invalid URL encoding");
  }
  let iterations = 0;
  while (decoded !== pathname) {
    if (iterations >= MAX_DECODE_ITERATIONS)
      throw new MultiLevelEncodingError();
    pathname = decoded;
    try {
      decoded = decodeURI(pathname);
    } catch {
      break;
    }
    iterations++;
  }
  return decoded;
}
__name(validateAndDecodePathname, "validateAndDecodePathname");
var MultiLevelEncodingError;
var MAX_DECODE_ITERATIONS;
var init_pathname = __esmMin(() => {
  MultiLevelEncodingError = /* @__PURE__ */ __name(class extends Error {
    constructor() {
      super("URL encoding depth exceeded the maximum number of decode iterations");
      this.name = "MultiLevelEncodingError";
    }
  }, "MultiLevelEncodingError");
  MAX_DECODE_ITERATIONS = 10;
});
function template({ title: title2, pathname, statusCode = 404, tabTitle, body }) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title2}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
__name(template, "template");
var init__4xx = __esmMin(() => {
  init_esm();
});
async function default404Page({ pathname }) {
  return new Response(template({
    statusCode: 404,
    title: "Not found",
    tabTitle: "404: Not Found",
    pathname
  }), {
    status: 404,
    headers: { "Content-Type": "text/html" }
  });
}
__name(default404Page, "default404Page");
var DEFAULT_404_ROUTE;
var default404Instance;
var init_astro_designed_error_pages$1 = __esmMin(() => {
  init__4xx();
  init_constants();
  DEFAULT_404_ROUTE = {
    component: DEFAULT_404_COMPONENT,
    params: [],
    pattern: /^\/404\/?$/,
    prerender: false,
    pathname: "/404",
    segments: [[{
      content: "404",
      dynamic: false,
      spread: false
    }]],
    type: "page",
    route: "/404",
    fallbackRoutes: [],
    isIndex: false,
    origin: "internal",
    distURL: []
  };
  default404Page.isAstroComponentFactory = true;
  default404Instance = { default: default404Page };
});
function findRouteToRewrite({ payload, routes, request, trailingSlash, buildFormat, base, outDir }) {
  let newUrl = void 0;
  if (payload instanceof URL)
    newUrl = payload;
  else if (payload instanceof Request)
    newUrl = new URL(payload.url);
  else
    newUrl = new URL(collapseDuplicateSlashes(payload), new URL(request.url).origin);
  const { pathname, resolvedUrlPathname } = normalizeRewritePathname(newUrl.pathname, base, trailingSlash, buildFormat);
  newUrl.pathname = resolvedUrlPathname;
  const decodedPathname = validateAndDecodePathname(pathname);
  if (isRoute404(decodedPathname)) {
    const errorRoute = routes.find((route) => route.route === "/404");
    if (errorRoute)
      return {
        routeData: errorRoute,
        newUrl,
        pathname: decodedPathname
      };
  }
  if (isRoute500(decodedPathname)) {
    const errorRoute = routes.find((route) => route.route === "/500");
    if (errorRoute)
      return {
        routeData: errorRoute,
        newUrl,
        pathname: decodedPathname
      };
  }
  let foundRoute;
  for (const route of routes)
    if (route.pattern.test(decodedPathname)) {
      if (route.params && route.params.length !== 0 && route.distURL && route.distURL.length !== 0) {
        if (!route.distURL.find((url) => url.href.replace(outDir.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") === trimSlashes(pathname)))
          continue;
      }
      foundRoute = route;
      break;
    }
  if (foundRoute)
    return {
      routeData: foundRoute,
      newUrl,
      pathname: decodedPathname
    };
  else {
    const custom404 = routes.find((route) => route.route === "/404");
    if (custom404)
      return {
        routeData: custom404,
        newUrl,
        pathname
      };
    else
      return {
        routeData: DEFAULT_404_ROUTE,
        newUrl,
        pathname
      };
  }
}
__name(findRouteToRewrite, "findRouteToRewrite");
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
  if (oldRequest.bodyUsed)
    throw new AstroError(RewriteWithBodyUsed);
  return createRequest({
    url: newUrl,
    method: oldRequest.method,
    body: oldRequest.body,
    isPrerendered,
    logger,
    headers: isPrerendered ? {} : oldRequest.headers,
    routePattern,
    init: {
      referrer: oldRequest.referrer,
      referrerPolicy: oldRequest.referrerPolicy,
      mode: oldRequest.mode,
      credentials: oldRequest.credentials,
      cache: oldRequest.cache,
      redirect: oldRequest.redirect,
      integrity: oldRequest.integrity,
      signal: oldRequest.signal,
      keepalive: oldRequest.keepalive,
      duplex: "half"
    }
  });
}
__name(copyRequest, "copyRequest");
function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
  if (!pathname)
    pathname = "/";
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  let finalPathname;
  if (pathname === "/")
    finalPathname = "/";
  else if (shouldAppendSlash)
    finalPathname = appendForwardSlash(pathname);
  else
    finalPathname = removeTrailingForwardSlash(pathname);
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}
__name(setOriginPathname, "setOriginPathname");
function getOriginPathname(request) {
  const origin = Reflect.get(request, originPathnameSymbol);
  if (origin)
    return decodeURIComponent(origin);
  return new URL(request.url).pathname;
}
__name(getOriginPathname, "getOriginPathname");
function normalizeRewritePathname(urlPathname, base, trailingSlash, buildFormat) {
  let pathname = collapseDuplicateSlashes(urlPathname);
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  if (base !== "/") {
    if (urlPathname === base || urlPathname === removeTrailingForwardSlash(base))
      pathname = "/";
    else if (urlPathname.startsWith(base)) {
      pathname = shouldAppendSlash ? appendForwardSlash(urlPathname) : removeTrailingForwardSlash(urlPathname);
      pathname = pathname.slice(base.length);
    }
  }
  if (!pathname.startsWith("/") && shouldAppendSlash && urlPathname.endsWith("/"))
    pathname = prependForwardSlash(pathname);
  if (buildFormat === "file")
    pathname = pathname.replace(/\.html$/, "");
  let resolvedUrlPathname;
  if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash)
    resolvedUrlPathname = removeTrailingForwardSlash(base);
  else
    resolvedUrlPathname = joinPaths(...[base, pathname].filter(Boolean));
  return {
    pathname,
    resolvedUrlPathname
  };
}
__name(normalizeRewritePathname, "normalizeRewritePathname");
var init_rewrite = __esmMin(() => {
  init_path$1();
  init_util();
  init_constants();
  init_errors$2();
  init_path();
  init_request();
  init_pathname();
  init_astro_designed_error_pages$1();
  init_route_errors();
});
function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length)
    return defineMiddleware((_context, next) => {
      return next();
    });
  return defineMiddleware((context2, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context2);
    function applyHandle(i2, handleContext) {
      const handle2 = filtered[i2];
      return handle2(handleContext, async (payload) => {
        if (i2 < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request)
              newRequest = payload;
            else if (payload instanceof URL)
              newRequest = new Request(payload, handleContext.request.clone());
            else
              newRequest = new Request(new URL(payload, handleContext.url.origin), handleContext.request.clone());
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, pipelineSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(payload, handleContext.request);
            if (pipeline.manifest.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true)
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(handleContext.url.pathname, pathname, routeData.component),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.params = getParams(routeData, pathname);
            handleContext.routePattern = routeData.route;
            setOriginPathname(handleContext.request, oldPathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
          }
          return applyHandle(i2 + 1, handleContext);
        } else
          return next(payload ?? carriedPayload);
      });
    }
    __name(applyHandle, "applyHandle");
  });
}
__name(sequence, "sequence");
var init_sequence = __esmMin(() => {
  init_constants();
  init_errors_data();
  init_errors$2();
  init_render();
  init_rewrite();
  init_defineMiddleware();
});
var RedirectComponentInstance;
var RedirectSinglePageBuiltModule;
var init_component = __esmMin(() => {
  RedirectComponentInstance = { default() {
    return new Response(null, { status: 301 });
  } };
  RedirectSinglePageBuiltModule = {
    page: () => Promise.resolve(RedirectComponentInstance),
    onRequest: (_, next) => next()
  };
});
var init_redirects = __esmMin(() => {
  init_component();
});
async function readBodyWithLimit(request, limit) {
  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader) {
    const contentLength = Number.parseInt(contentLengthHeader, 10);
    if (Number.isFinite(contentLength) && contentLength > limit)
      throw new BodySizeLimitError(limit);
  }
  if (!request.body)
    return /* @__PURE__ */ new Uint8Array();
  const reader = request.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    if (value) {
      received += value.byteLength;
      if (received > limit)
        throw new BodySizeLimitError(limit);
      chunks.push(value);
    }
  }
  const buffer2 = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    buffer2.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer2;
}
__name(readBodyWithLimit, "readBodyWithLimit");
var BodySizeLimitError;
var init_request_body = __esmMin(() => {
  BodySizeLimitError = /* @__PURE__ */ __name(class extends Error {
    limit;
    constructor(limit) {
      super(`Request body exceeds the configured limit of ${limit} bytes`);
      this.name = "BodySizeLimitError";
      this.limit = limit;
    }
  }, "BodySizeLimitError");
});
function getPattern(segments, base, addTrailingSlash) {
  const pathname = segments.map((segment) => {
    if (segment.length === 1 && segment[0].spread)
      return "(?:\\/(.*?))?";
    else
      return "\\/" + segment.map((part) => {
        if (part.spread)
          return "(.*?)";
        else if (part.dynamic)
          return "([^/]+?)";
        else
          return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }).join("");
  }).join("");
  const trailing = addTrailingSlash && segments.length ? getTrailingSlashPattern(addTrailingSlash) : "$";
  let initial = "\\/";
  if (addTrailingSlash === "never" && base !== "/" && pathname !== "")
    initial = "";
  return new RegExp(`^${pathname || initial}${trailing}`);
}
__name(getPattern, "getPattern");
function getTrailingSlashPattern(addTrailingSlash) {
  if (addTrailingSlash === "always")
    return "\\/$";
  if (addTrailingSlash === "never")
    return "$";
  return "\\/?$";
}
__name(getTrailingSlashPattern, "getTrailingSlashPattern");
var init_pattern = __esmMin(() => {
});
function badRequest(reason) {
  return new Response(null, {
    status: 400,
    statusText: "Bad request: " + reason
  });
}
__name(badRequest, "badRequest");
async function getRequestData(request, bodySizeLimit = DEFAULT_BODY_SIZE_LIMIT) {
  switch (request.method) {
    case "GET": {
      const params = new URL(request.url).searchParams;
      if (!params.has("s") || !params.has("e") || !params.has("p"))
        return badRequest("Missing required query parameters.");
      const encryptedSlots = params.get("s");
      return {
        encryptedComponentExport: params.get("e"),
        encryptedProps: params.get("p"),
        encryptedSlots
      };
    }
    case "POST":
      try {
        const body = await readBodyWithLimit(request, bodySizeLimit);
        const raw = new TextDecoder().decode(body);
        const data = JSON.parse(raw);
        if (Object.hasOwn(data, "slots") && typeof data.slots === "object")
          return badRequest("Plaintext slots are not allowed. Slots must be encrypted.");
        if (Object.hasOwn(data, "componentExport") && typeof data.componentExport === "string")
          return badRequest("Plaintext componentExport is not allowed. componentExport must be encrypted.");
        return data;
      } catch (e2) {
        if (e2 instanceof BodySizeLimitError)
          return new Response(null, {
            status: 413,
            statusText: e2.message
          });
        if (e2 instanceof SyntaxError)
          return badRequest("Request format is invalid.");
        throw e2;
      }
    default:
      return new Response(null, { status: 405 });
  }
}
__name(getRequestData, "getRequestData");
function createEndpoint(manifest2) {
  const page = /* @__PURE__ */ __name(async (result) => {
    const params = result.params;
    if (!params.name)
      return new Response(null, {
        status: 400,
        statusText: "Bad request"
      });
    const componentId = params.name;
    const data = await getRequestData(result.request, manifest2.serverIslandBodySizeLimit);
    if (data instanceof Response)
      return data;
    let imp = (await (await manifest2.serverIslandMappings?.())?.serverIslandMap)?.get(componentId);
    if (!imp)
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    const key = await manifest2.key;
    let componentExport;
    try {
      componentExport = await decryptString(key, data.encryptedComponentExport, `export:${componentId}`);
    } catch (_e) {
      return badRequest("Encrypted componentExport value is invalid.");
    }
    const encryptedProps = data.encryptedProps;
    let props = {};
    if (encryptedProps !== "")
      try {
        const propString = await decryptString(key, encryptedProps, `props:${componentId}`);
        props = JSON.parse(propString);
      } catch (_e) {
        return badRequest("Encrypted props value is invalid.");
      }
    let decryptedSlots = {};
    const encryptedSlots = data.encryptedSlots;
    if (encryptedSlots !== "")
      try {
        const slotsString = await decryptString(key, encryptedSlots, `slots:${componentId}`);
        decryptedSlots = JSON.parse(slotsString);
      } catch (_e) {
        return badRequest("Encrypted slots value is invalid.");
      }
    let Component = (await imp())[componentExport];
    const slots = {};
    for (const prop in decryptedSlots)
      slots[prop] = createSlotValueFromString(decryptedSlots[prop]);
    result.response.headers.set("X-Robots-Tag", "noindex");
    if (isAstroComponentFactory(Component)) {
      const ServerIsland = Component;
      Component = /* @__PURE__ */ __name(function(...args) {
        return ServerIsland.apply(this, args);
      }, "Component");
      Object.assign(Component, ServerIsland);
      Component.propagation = "self";
    }
    return renderTemplate`${renderComponent(result, "Component", Component, props, slots)}`;
  }, "page");
  page.isAstroComponentFactory = true;
  return {
    default: page,
    partial: true
  };
}
__name(createEndpoint, "createEndpoint");
var SERVER_ISLAND_ROUTE;
var SERVER_ISLAND_COMPONENT;
var DEFAULT_BODY_SIZE_LIMIT;
var init_endpoint = __esmMin(() => {
  init_server();
  init_factory();
  init_slot();
  init_encryption();
  init_request_body();
  SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
  SERVER_ISLAND_COMPONENT = "_server-islands.astro";
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024;
});
function createDefaultRoutes(manifest2) {
  const root = new URL(manifest2.rootDir);
  return [{
    instance: default404Instance,
    matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
    route: DEFAULT_404_ROUTE.route,
    component: DEFAULT_404_COMPONENT
  }, {
    instance: createEndpoint(manifest2),
    matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
    route: SERVER_ISLAND_ROUTE,
    component: SERVER_ISLAND_COMPONENT
  }];
}
__name(createDefaultRoutes, "createDefaultRoutes");
var init_default = __esmMin(() => {
  init_constants();
  init_endpoint();
  init_astro_designed_error_pages$1();
});
function ensure404Route(manifest2) {
  if (!manifest2.routes.some((route) => route.route === "/404"))
    manifest2.routes.push(DEFAULT_404_ROUTE);
  return manifest2;
}
__name(ensure404Route, "ensure404Route");
var init_astro_designed_error_pages = __esmMin(() => {
  init_astro_designed_error_pages$1();
});
function routeComparator(a2, b) {
  const commonLength = Math.min(a2.segments.length, b.segments.length);
  for (let index = 0; index < commonLength; index++) {
    const aSegment = a2.segments[index];
    const bSegment = b.segments[index];
    const aIsStatic = aSegment.every((part) => !part.dynamic && !part.spread);
    const bIsStatic = bSegment.every((part) => !part.dynamic && !part.spread);
    if (aIsStatic && bIsStatic) {
      const aContent = aSegment.map((part) => part.content).join("");
      const bContent = bSegment.map((part) => part.content).join("");
      if (aContent !== bContent)
        return aContent.localeCompare(bContent);
    }
    if (aIsStatic !== bIsStatic)
      return aIsStatic ? -1 : 1;
    const aAllDynamic = aSegment.every((part) => part.dynamic);
    if (aAllDynamic !== bSegment.every((part) => part.dynamic))
      return aAllDynamic ? 1 : -1;
    const aHasSpread = aSegment.some((part) => part.spread);
    if (aHasSpread !== bSegment.some((part) => part.spread))
      return aHasSpread ? 1 : -1;
  }
  const aLength = a2.segments.length;
  const bLength = b.segments.length;
  if (aLength !== bLength) {
    const aEndsInRest = a2.segments.at(-1)?.some((part) => part.spread);
    const bEndsInRest = b.segments.at(-1)?.some((part) => part.spread);
    if (aEndsInRest !== bEndsInRest && Math.abs(aLength - bLength) === 1) {
      if (aLength > bLength && aEndsInRest)
        return 1;
      if (bLength > aLength && bEndsInRest)
        return -1;
    }
    return aLength > bLength ? -1 : 1;
  }
  if (a2.type === "endpoint" !== (b.type === "endpoint"))
    return a2.type === "endpoint" ? -1 : 1;
  return a2.route.localeCompare(b.route);
}
__name(routeComparator, "routeComparator");
var init_priority = __esmMin(() => {
});
function normalizeBase(base) {
  if (!base)
    return "/";
  if (base === "/")
    return base;
  return prependForwardSlash(base);
}
__name(normalizeBase, "normalizeBase");
function getRedirectForPathname(pathname) {
  let value = prependForwardSlash(pathname);
  if (value.startsWith("//"))
    return {
      pathname: value,
      redirect: `/${value.replace(/^\/+/, "")}`
    };
  return { pathname: value };
}
__name(getRedirectForPathname, "getRedirectForPathname");
function stripBase(pathname, base, baseWithoutTrailingSlash, trailingSlash) {
  if (base === "/")
    return pathname;
  const baseWithSlash = `${baseWithoutTrailingSlash}/`;
  if (pathname === baseWithoutTrailingSlash || pathname === base)
    return trailingSlash === "always" ? null : "/";
  if (pathname === baseWithSlash)
    return trailingSlash === "never" ? null : "/";
  if (pathname.startsWith(baseWithSlash))
    return pathname.slice(baseWithoutTrailingSlash.length);
  return null;
}
__name(stripBase, "stripBase");
function normalizeFileFormatPathname(pathname) {
  if (pathname.endsWith("/index.html")) {
    const trimmed = pathname.slice(0, -11);
    return trimmed === "" ? "/" : trimmed;
  }
  if (pathname.endsWith(".html")) {
    const trimmed = pathname.slice(0, -5);
    return trimmed === "" ? "/" : trimmed;
  }
  return pathname;
}
__name(normalizeFileFormatPathname, "normalizeFileFormatPathname");
var Router;
var init_router = __esmMin(() => {
  init_path();
  init_params_and_props();
  init_priority();
  Router = /* @__PURE__ */ __name(class {
    #routes;
    #base;
    #baseWithoutTrailingSlash;
    #buildFormat;
    #trailingSlash;
    constructor(routes, options) {
      this.#routes = [...routes].sort(routeComparator);
      this.#base = normalizeBase(options.base);
      this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#base);
      this.#buildFormat = options.buildFormat;
      this.#trailingSlash = options.trailingSlash;
    }
    /**
    * Match an input pathname against the route list.
    * If allowWithoutBase is true, a non-base-prefixed path is still considered.
    */
    match(inputPathname, { allowWithoutBase = false } = {}) {
      const normalized = getRedirectForPathname(inputPathname);
      if (normalized.redirect)
        return {
          type: "redirect",
          location: normalized.redirect,
          status: 301
        };
      if (this.#base !== "/") {
        const baseWithSlash = `${this.#baseWithoutTrailingSlash}/`;
        if (this.#trailingSlash === "always" && (normalized.pathname === this.#baseWithoutTrailingSlash || normalized.pathname === this.#base))
          return {
            type: "redirect",
            location: baseWithSlash,
            status: 301
          };
        if (this.#trailingSlash === "never" && normalized.pathname === baseWithSlash)
          return {
            type: "redirect",
            location: this.#baseWithoutTrailingSlash,
            status: 301
          };
      }
      const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
      if (!baseResult) {
        if (!allowWithoutBase)
          return {
            type: "none",
            reason: "outside-base"
          };
      }
      let pathname = baseResult ?? normalized.pathname;
      if (this.#buildFormat === "file")
        pathname = normalizeFileFormatPathname(pathname);
      const route = this.#routes.find((candidate) => {
        if (candidate.pattern.test(pathname))
          return true;
        return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
      });
      if (!route)
        return {
          type: "none",
          reason: "no-match"
        };
      return {
        type: "match",
        route,
        params: getParams(route, pathname),
        pathname
      };
    }
    /**
    * Returns all routes that match the given pathname, in priority order.
    * Used when the first match (e.g. a prerendered route) cannot serve
    * the request and subsequent matches need to be tried.
    */
    matchAll(inputPathname, { allowWithoutBase = false } = {}) {
      const normalized = getRedirectForPathname(inputPathname);
      if (normalized.redirect)
        return [];
      const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
      if (!baseResult && !allowWithoutBase)
        return [];
      let pathname = baseResult ?? normalized.pathname;
      if (this.#buildFormat === "file")
        pathname = normalizeFileFormatPathname(pathname);
      return this.#routes.filter((candidate) => {
        if (candidate.pattern.test(pathname))
          return true;
        return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
      });
    }
  }, "Router");
});
var FORBIDDEN_PATH_KEYS;
var init_object = __esmMin(() => {
  FORBIDDEN_PATH_KEYS = /* @__PURE__ */ new Set([
    "__proto__",
    "constructor",
    "prototype"
  ]);
});
function matchesLevel(messageLevel, configuredLevel) {
  return levels[messageLevel] >= levels[configuredLevel];
}
__name(matchesLevel, "matchesLevel");
var init_public = __esmMin(() => {
  init_core$2();
});
function nodeLogDestination(config3 = {}) {
  const { level = "info" } = config3;
  return { write(event) {
    let dest = process.stderr;
    if (levels[event.level] < levels["error"])
      dest = process.stdout;
    if (!matchesLevel(event.level, level))
      return;
    let trailingLine = event.newLine ? "\n" : "";
    if (event.label === "SKIP_FORMAT")
      dest.write(event.message + trailingLine);
    else
      dest.write(getEventPrefix(event) + " " + event.message + trailingLine);
  } };
}
__name(nodeLogDestination, "nodeLogDestination");
function node_default(options) {
  return nodeLogDestination(options);
}
__name(node_default, "node_default");
var init_node = __esmMin(() => {
  init_core$2();
  init_public();
});
function consoleLogDestination(config3 = {}) {
  const { level = "info" } = config3;
  return { write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"])
      dest = console.info;
    if (!matchesLevel(event.level, level))
      return;
    if (event.label === "SKIP_FORMAT")
      dest(event.message);
    else
      dest(getEventPrefix(event) + " " + event.message);
  } };
}
__name(consoleLogDestination, "consoleLogDestination");
function createConsoleLogger({ level }) {
  return new AstroLogger({
    level,
    destination: consoleLogDestination()
  });
}
__name(createConsoleLogger, "createConsoleLogger");
function console_default2(options) {
  return consoleLogDestination(options);
}
__name(console_default2, "console_default");
var init_console = __esmMin(() => {
  init_core$2();
  init_public();
});
function jsonLoggerDestination(config3 = {}) {
  const { pretty = false, level = "info" } = config3;
  return { write(event) {
    if (!matchesLevel(event.level, level))
      return;
    const dest = levels[event.level] >= levels["error"] ? console.error : console.info;
    const message = event.message.replace(SGR_REGEX, "");
    dest(pretty ? JSON.stringify({
      message,
      label: event.label,
      level: event.level
    }, null, 2) : JSON.stringify({
      message,
      label: event.label,
      level: event.level
    }));
  } };
}
__name(jsonLoggerDestination, "jsonLoggerDestination");
var SGR_REGEX;
var init_json = __esmMin(() => {
  init_core$2();
  init_public();
  SGR_REGEX = new RegExp(`${String.fromCharCode(27)}\\[[0-9;]*m`, "g");
});
function compose(destinations) {
  return {
    write(chunk) {
      for (const logger of destinations)
        logger.write(chunk);
    },
    flush() {
      for (const logger of destinations)
        if (logger.flush)
          logger.flush();
    },
    close() {
      for (const logger of destinations)
        if (logger.close)
          logger.close();
    }
  };
}
__name(compose, "compose");
var init_compose = __esmMin(() => {
});
function normalizeEntrypoint(entrypoint) {
  return entrypoint instanceof URL ? entrypoint.href : entrypoint;
}
__name(normalizeEntrypoint, "normalizeEntrypoint");
async function loadLoggerDestination(config3) {
  let cause = void 0;
  const entrypoint = normalizeEntrypoint(config3.entrypoint);
  try {
    switch (config3.entrypoint) {
      case "astro/logger/node":
        return node_default(config3.config);
      case "astro/logger/console":
        return console_default2(config3.config);
      case "astro/logger/json":
        return jsonLoggerDestination(config3.config);
      case "astro/logger/compose": {
        let destinations = [];
        if (config3.config?.loggers) {
          const loggers = config3.config?.loggers;
          destinations = await Promise.all(loggers.map(async (loggerConfig) => {
            return (await import(
              /* @vite-ignore */
              normalizeEntrypoint(loggerConfig.entrypoint)
            )).default(loggerConfig.config);
          }));
        }
        return compose(destinations);
      }
      default:
        return (await import(
          /* @vite-ignore */
          entrypoint
        )).default(config3.config);
    }
  } catch (e2) {
    if (e2 instanceof Error)
      cause = e2;
  }
  const error4 = new AstroError({
    ...UnableToLoadLogger,
    message: UnableToLoadLogger.message(entrypoint)
  });
  if (cause)
    error4.cause = cause;
  throw error4;
}
__name(loadLoggerDestination, "loadLoggerDestination");
var init_load = __esmMin(() => {
  init_core$2();
  init_errors$2();
  init_errors_data();
  init_node();
  init_console();
  init_json();
  init_compose();
});
var PipelineFeatures;
var ALL_PIPELINE_FEATURES;
var Pipeline;
var init_base_pipeline = __esmMin(() => {
  init_noop_actions();
  init_origin_check();
  init_errors_data();
  init_errors$2();
  init_core$2();
  init_noop_middleware();
  init_sequence();
  init_redirects();
  init_route_cache();
  init_default();
  init_astro_designed_error_pages();
  init_router();
  init_object();
  init_load();
  PipelineFeatures = {
    redirects: 1,
    sessions: 2,
    actions: 4,
    middleware: 8,
    i18n: 16,
    cache: 32
  };
  ALL_PIPELINE_FEATURES = PipelineFeatures.redirects | PipelineFeatures.sessions | PipelineFeatures.actions | PipelineFeatures.middleware | PipelineFeatures.i18n | PipelineFeatures.cache;
  Pipeline = /* @__PURE__ */ __name(class {
    internalMiddleware;
    resolvedMiddleware = void 0;
    resolvedLogger = false;
    resolvedActions = void 0;
    resolvedSessionDriver = void 0;
    resolvedCacheProvider = void 0;
    compiledCacheRoutes = void 0;
    /**
    * Bit mask of pipeline features activated by handler classes.
    * Each handler sets its bit via `|=`. Only meaningful when a
    * custom `src/fetch.ts` fetch handler is in use.
    */
    usedFeatures = 0;
    logger;
    manifest;
    /**
    * "development" or "production" only
    */
    runtimeMode;
    renderers;
    resolve;
    streaming;
    /**
    * Used to provide better error messages for `Astro.clientAddress`
    */
    adapterName;
    clientDirectives;
    inlinedScripts;
    compressHTML;
    i18n;
    middleware;
    routeCache;
    /**
    * Used for `Astro.site`.
    */
    site;
    /**
    * Array of built-in, internal, routes.
    * Used to find the route module
    */
    defaultRoutes;
    actions;
    sessionDriver;
    cacheProvider;
    cacheConfig;
    serverIslands;
    /** Route data derived from the manifest, used for route matching. */
    manifestData;
    /** Pattern-matching router built from manifestData. */
    #router;
    constructor(logger, manifest2, runtimeMode, renderers2, resolve, streaming, adapterName = manifest2.adapterName, clientDirectives = manifest2.clientDirectives, inlinedScripts = manifest2.inlinedScripts, compressHTML = manifest2.compressHTML, i18n = manifest2.i18n, middleware = manifest2.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest2.site ? new URL(manifest2.site) : void 0, defaultRoutes = createDefaultRoutes(manifest2), actions = manifest2.actions, sessionDriver = manifest2.sessionDriver, cacheProvider = manifest2.cacheProvider, cacheConfig = manifest2.cacheConfig, serverIslands = manifest2.serverIslandMappings) {
      this.logger = logger;
      this.manifest = manifest2;
      this.runtimeMode = runtimeMode;
      this.renderers = renderers2;
      this.resolve = resolve;
      this.streaming = streaming;
      this.adapterName = adapterName;
      this.clientDirectives = clientDirectives;
      this.inlinedScripts = inlinedScripts;
      this.compressHTML = compressHTML;
      this.i18n = i18n;
      this.middleware = middleware;
      this.routeCache = routeCache;
      this.site = site;
      this.defaultRoutes = defaultRoutes;
      this.actions = actions;
      this.sessionDriver = sessionDriver;
      this.cacheProvider = cacheProvider;
      this.cacheConfig = cacheConfig;
      this.serverIslands = serverIslands;
      this.manifestData = { routes: (manifest2.routes ?? []).map((route) => route.routeData) };
      ensure404Route(this.manifestData);
      this.#router = new Router(this.manifestData.routes, {
        base: manifest2.base,
        trailingSlash: manifest2.trailingSlash,
        buildFormat: manifest2.buildFormat
      });
      this.internalMiddleware = [];
    }
    /**
    * Low-level route matching against the manifest routes. Returns the
    * matched `RouteData` or `undefined`. Does not filter prerendered
    * routes or check public assets — use `BaseApp.match()` for that.
    */
    matchRoute(pathname) {
      const match = this.#router.match(pathname, { allowWithoutBase: true });
      if (match.type !== "match")
        return void 0;
      return match.route;
    }
    /**
    * Returns all routes matching the given pathname, in priority order.
    * Used when the first match cannot serve the request (e.g. a
    * prerendered dynamic route that doesn't cover this specific path)
    * and the caller needs to try subsequent matches.
    */
    matchAllRoutes(pathname) {
      return this.#router.matchAll(pathname, { allowWithoutBase: true });
    }
    /**
    * Rebuilds the internal router after routes have been added or
    * removed (e.g. by the dev server on HMR).
    */
    rebuildRouter() {
      this.#router = new Router(this.manifestData.routes, {
        base: this.manifest.base,
        trailingSlash: this.manifest.trailingSlash,
        buildFormat: this.manifest.buildFormat
      });
    }
    /**
    * Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
    * it returns a no-op function
    */
    async getMiddleware() {
      if (this.resolvedMiddleware)
        return this.resolvedMiddleware;
      if (this.middleware) {
        const internalMiddlewares = [(await this.middleware()).onRequest ?? NOOP_MIDDLEWARE_FN];
        if (this.manifest.checkOrigin)
          internalMiddlewares.unshift(createOriginCheckMiddleware());
        this.resolvedMiddleware = sequence(...internalMiddlewares);
        return this.resolvedMiddleware;
      } else {
        this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
        return this.resolvedMiddleware;
      }
    }
    /**
    * Clears the cached middleware so it is re-resolved on the next request.
    * Called via HMR when middleware files change during development.
    */
    clearMiddleware() {
      this.resolvedMiddleware = void 0;
    }
    /**
    * Resolves the logger destination from the manifest and updates the pipeline logger.
    * If the user configured `logger`, the bundled logger factory is loaded
    * and replaces the default console destination. This is lazy and only resolves once.
    */
    async getLogger() {
      if (this.resolvedLogger)
        return this.logger;
      this.resolvedLogger = true;
      if (this.manifest.loggerConfig)
        this.logger = new AstroLogger({
          destination: await loadLoggerDestination(this.manifest.loggerConfig),
          level: this.manifest.logLevel
        });
      return this.logger;
    }
    async getActions() {
      if (this.resolvedActions)
        return this.resolvedActions;
      else if (this.actions) {
        this.resolvedActions = await this.actions();
        return this.resolvedActions;
      }
      return NOOP_ACTIONS_MOD;
    }
    async getSessionDriver() {
      if (this.resolvedSessionDriver !== void 0)
        return this.resolvedSessionDriver;
      if (this.sessionDriver) {
        const driverModule = await this.sessionDriver();
        this.resolvedSessionDriver = driverModule?.default || null;
        return this.resolvedSessionDriver;
      }
      this.resolvedSessionDriver = null;
      return null;
    }
    async getCacheProvider() {
      if (this.resolvedCacheProvider !== void 0)
        return this.resolvedCacheProvider;
      if (this.cacheProvider) {
        const factory = (await this.cacheProvider())?.default || null;
        this.resolvedCacheProvider = factory ? factory(this.cacheConfig?.options) : null;
        return this.resolvedCacheProvider;
      }
      this.resolvedCacheProvider = null;
      return null;
    }
    async getServerIslands() {
      if (this.serverIslands)
        return this.serverIslands();
      return {
        serverIslandMap: /* @__PURE__ */ new Map(),
        serverIslandNameMap: /* @__PURE__ */ new Map()
      };
    }
    async getAction(path) {
      const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
      let { server: server2 } = await this.getActions();
      if (!server2 || !(typeof server2 === "object"))
        throw new TypeError(`Expected \`server\` export in actions file to be an object. Received ${typeof server2}.`);
      for (const key of pathKeys) {
        if (FORBIDDEN_PATH_KEYS.has(key))
          throw new AstroError({
            ...ActionNotFoundError,
            message: ActionNotFoundError.message(pathKeys.join("."))
          });
        if (!Object.hasOwn(server2, key))
          throw new AstroError({
            ...ActionNotFoundError,
            message: ActionNotFoundError.message(pathKeys.join("."))
          });
        server2 = server2[key];
      }
      if (typeof server2 !== "function")
        throw new TypeError(`Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server2}.`);
      return server2;
    }
    async getModuleForRoute(route) {
      for (const defaultRoute of this.defaultRoutes)
        if (route.component === defaultRoute.component)
          return { page: () => Promise.resolve(defaultRoute.instance) };
      if (route.type === "redirect")
        return RedirectSinglePageBuiltModule;
      else {
        if (this.manifest.pageMap) {
          const importComponentInstance = this.manifest.pageMap.get(route.component);
          if (!importComponentInstance)
            throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
          return await importComponentInstance();
        } else if (this.manifest.pageModule)
          return this.manifest.pageModule;
        throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
      }
    }
  }, "Pipeline");
});
var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
var cookieOctetRegExp = /^[!#$&'()*+\-.\/0-9:<=>?@A-Z[\]\^_`a-z{|}~]*$/;
var NullObject = /* @__PURE__ */ (() => {
  const C2 = /* @__PURE__ */ __name(function() {
  }, "C");
  C2.prototype = /* @__PURE__ */ Object.create(null);
  return C2;
})();
function parseCookie(str, options) {
  const obj = new NullObject();
  const len = str.length;
  if (len < 2)
    return obj;
  const dec = options?.decode || decode;
  let index = 0;
  do {
    const eqIdx = eqIndex(str, index, len);
    if (eqIdx === len)
      break;
    const endIdx = endIndex(str, index, len);
    if (eqIdx > endIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = valueSlice(str, index, eqIdx);
    if (obj[key] === void 0)
      obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
    index = endIdx + 1;
  } while (index < len);
  return obj;
}
__name(parseCookie, "parseCookie");
function stringifySetCookie(cookie, options) {
  const enc = options?.encode || defaultEncode;
  if (!cookieNameRegExp.test(cookie.name))
    throw new TypeError(`argument name is invalid: ${cookie.name}`);
  const value = cookie.value == null ? "" : enc(cookie.value);
  if (!cookieValueRegExp.test(value))
    throw new TypeError(`argument val is invalid: ${cookie.value}`);
  let str = cookie.name + "=" + value;
  if (cookie.maxAge !== void 0) {
    if (!Number.isInteger(cookie.maxAge))
      throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
    str += "; Max-Age=" + cookie.maxAge;
  }
  if (cookie.domain) {
    if (!domainValueRegExp.test(cookie.domain))
      throw new TypeError(`option domain is invalid: ${cookie.domain}`);
    str += "; Domain=" + cookie.domain;
  }
  if (cookie.path) {
    if (!pathValueRegExp.test(cookie.path))
      throw new TypeError(`option path is invalid: ${cookie.path}`);
    str += "; Path=" + cookie.path;
  }
  if (cookie.expires) {
    if (!Number.isFinite(cookie.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${cookie.expires}`);
    str += "; Expires=" + cookie.expires.toUTCString();
  }
  if (cookie.httpOnly)
    str += "; HttpOnly";
  if (cookie.secure)
    str += "; Secure";
  if (cookie.partitioned)
    str += "; Partitioned";
  if (cookie.priority)
    switch (typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${cookie.priority}`);
    }
  if (cookie.sameSite)
    switch (typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite) {
      case true:
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
    }
  return str;
}
__name(stringifySetCookie, "stringifySetCookie");
function endIndex(str, min, len) {
  const index = str.indexOf(";", min);
  return index === -1 ? len : index;
}
__name(endIndex, "endIndex");
function eqIndex(str, min, len) {
  const index = str.indexOf("=", min);
  return index === -1 ? len : index;
}
__name(eqIndex, "eqIndex");
function valueSlice(str, min, max) {
  if (min === max)
    return "";
  let start = min;
  let end = max;
  do {
    const code = str.charCodeAt(start);
    if (code !== 32 && code !== 9)
      break;
  } while (++start < end);
  while (end > start) {
    const code = str.charCodeAt(end - 1);
    if (code !== 32 && code !== 9)
      break;
    end--;
  }
  return str.slice(start, end);
}
__name(valueSlice, "valueSlice");
function decode(str) {
  if (str.indexOf("%") === -1)
    return str;
  try {
    return decodeURIComponent(str);
  } catch (e2) {
    return str;
  }
}
__name(decode, "decode");
function defaultEncode(str) {
  return cookieOctetRegExp.test(str) ? str : encodeURIComponent(str);
}
__name(defaultEncode, "defaultEncode");
init_errors$2();
var DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
var DELETED_VALUE = "deleted";
var responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
var identity = /* @__PURE__ */ __name((value) => value, "identity");
var AstroCookie = /* @__PURE__ */ __name(class {
  value;
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0)
      throw new Error(`Cannot convert undefined to an object.`);
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}, "AstroCookie");
var AstroCookies = /* @__PURE__ */ __name(class {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
  * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
  * in a Set-Cookie header added to the response.
  * @param key The cookie to delete
  * @param options Options related to this deletion, such as the path of the cookie.
  */
  delete(key, options) {
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      stringifySetCookie({
        ...options,
        name: key,
        value: DELETED_VALUE,
        expires: DELETED_EXPIRATION,
        maxAge: void 0
      }),
      false
    ]);
  }
  /**
  * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
  * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
  * from that set call, overriding any values already part of the request.
  * @param key The cookie to get.
  * @returns An object containing the cookie value as well as convenience methods for converting its value.
  */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue)
        return new AstroCookie(serializedValue);
      else
        return;
    }
    const decode2 = options?.decode ?? decodeURIComponent;
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      if (value) {
        let decodedValue;
        try {
          decodedValue = decode2(value);
        } catch (_error) {
          decodedValue = value;
        }
        return new AstroCookie(decodedValue);
      }
    }
  }
  /**
  * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
  * part of the initial request or set via Astro.cookies.set(key)
  * @param key The cookie to check for.
  * @param _options This parameter is no longer used.
  * @returns
  */
  has(key, _options) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    return this.#ensureParsed()[key] !== void 0;
  }
  /**
  * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
  * an object it will be stringified via JSON.stringify(value). Additionally you
  * can provide options customizing how this cookie will be set, such as setting httpOnly
  * in order to prevent the cookie from being read in client-side JavaScript.
  * @param key The name of the cookie to set.
  * @param value A value, either a string or other primitive or an object.
  * @param options Options for the cookie, such as the path and security settings.
  */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = /* @__PURE__ */ new Error("Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page.");
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string")
      serializedValue = value;
    else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value))
        serializedValue = JSON.stringify(value);
      else
        serializedValue = toStringValue;
    }
    const { encode: encode2, ...attributes } = options ?? {};
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      stringifySetCookie({
        ...attributes,
        name: key,
        value: serializedValue
      }, { encode: encode2 }),
      true
    ]);
    if (this.#request[responseSentSymbol])
      throw new AstroError({ ...ResponseSentError });
  }
  /**
  * Merges a new AstroCookies instance into the current instance. Any new cookies
  * will be added to the current instance, overwriting any existing cookies with the same name.
  */
  merge(cookies) {
    const outgoing = cookies.#outgoing;
    if (outgoing)
      for (const [key, value] of outgoing)
        this.#ensureOutgoingMap().set(key, value);
  }
  /**
  * Astro.cookies.header() returns an iterator for the cookies that have previously
  * been set by either Astro.cookies.set() or Astro.cookies.delete().
  * This method is primarily used by adapters to set the header on outgoing responses.
  * @returns
  */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing)
      yield value[1];
  }
  /**
  * Marks the cookies as consumed and returns the header values.
  * After consumption, any subsequent `set()` calls will warn.
  */
  consume() {
    this.#consumed = true;
    return this.headers();
  }
  /**
  * @deprecated Use the instance method `cookies.consume()` instead.
  * Kept for backward compatibility with adapters.
  */
  static consume(cookies) {
    return cookies.consume();
  }
  #ensureParsed() {
    if (!this.#requestValues)
      this.#parse();
    if (!this.#requestValues)
      this.#requestValues = /* @__PURE__ */ Object.create(null);
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing)
      this.#outgoing = /* @__PURE__ */ new Map();
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw)
      return;
    this.#requestValues = parseCookie(raw, { decode: identity });
  }
}, "AstroCookies");
var astroCookiesSymbol = /* @__PURE__ */ Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
__name(attachCookiesToResponse, "attachCookiesToResponse");
function getCookiesFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null)
    return cookies;
  else
    return;
}
__name(getCookiesFromResponse, "getCookiesFromResponse");
function* getSetCookiesFromResponse(response) {
  const cookies = getCookiesFromResponse(response);
  if (!cookies)
    return [];
  for (const headerValue of cookies.consume())
    yield headerValue;
  return [];
}
__name(getSetCookiesFromResponse, "getSetCookiesFromResponse");
var MAX_ARRAY_LEN = 2 ** 32 - 1;
var MAX_ARRAY_INDEX = MAX_ARRAY_LEN - 1;
var DevalueError = /* @__PURE__ */ __name(class extends Error {
  /**
  * @param {string} message
  * @param {string[]} keys
  * @param {any} [value] - The value that failed to be serialized
  * @param {any} [root] - The root value being serialized
  */
  constructor(message, keys, value, root) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
    this.value = value;
    this.root = root;
  }
}, "DevalueError");
function is_primitive(thing) {
  return thing === null || typeof thing !== "object" && typeof thing !== "function";
}
__name(is_primitive, "is_primitive");
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
__name(is_plain_object, "is_plain_object");
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
__name(get_type, "get_type");
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
__name(get_escaped_char, "get_escaped_char");
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i2 = 0; i2 < len; i2 += 1) {
    const char = str[i2];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i2) + replacement;
      last_pos = i2 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
__name(stringify_string, "stringify_string");
function enumerable_symbols(object2) {
  return Object.getOwnPropertySymbols(object2).filter((symbol) => Object.getOwnPropertyDescriptor(object2, symbol).enumerable);
}
__name(enumerable_symbols, "enumerable_symbols");
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key) {
  return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
__name(stringify_key, "stringify_key");
function is_valid_array_index(n2) {
  if (!Number.isInteger(n2))
    return false;
  if (n2 < 0)
    return false;
  if (n2 > MAX_ARRAY_INDEX)
    return false;
  return true;
}
__name(is_valid_array_index, "is_valid_array_index");
function is_valid_array_len(n2) {
  if (!Number.isInteger(n2))
    return false;
  if (n2 < 0)
    return false;
  if (n2 > MAX_ARRAY_LEN)
    return false;
  return true;
}
__name(is_valid_array_len, "is_valid_array_len");
function is_valid_array_index_string(s2) {
  if (s2.length === 0)
    return false;
  if (s2.length > 1 && s2.charCodeAt(0) === 48)
    return false;
  for (let i2 = 0; i2 < s2.length; i2++) {
    const c = s2.charCodeAt(i2);
    if (c < 48 || c > 57)
      return false;
  }
  return is_valid_array_index(+s2);
}
__name(is_valid_array_index_string, "is_valid_array_index_string");
function valid_array_indices(array2) {
  const keys = Object.keys(array2);
  for (var i2 = keys.length - 1; i2 >= 0; i2--)
    if (is_valid_array_index_string(keys[i2]))
      break;
  keys.length = i2 + 1;
  return keys;
}
__name(valid_array_indices, "valid_array_indices");
function encode_native(array_buffer) {
  return new Uint8Array(array_buffer).toBase64();
}
__name(encode_native, "encode_native");
function decode_native(base642) {
  return Uint8Array.fromBase64(base642).buffer;
}
__name(decode_native, "decode_native");
function encode_buffer(array_buffer) {
  return Buffer.from(array_buffer).toString("base64");
}
__name(encode_buffer, "encode_buffer");
function decode_buffer(base642) {
  return Uint8Array.from(Buffer.from(base642, "base64")).buffer;
}
__name(decode_buffer, "decode_buffer");
function encode_legacy(array_buffer) {
  const array2 = new Uint8Array(array_buffer);
  let binary2 = "";
  const chunk_size = 32768;
  for (let i2 = 0; i2 < array2.length; i2 += chunk_size) {
    const chunk = array2.subarray(i2, i2 + chunk_size);
    binary2 += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary2);
}
__name(encode_legacy, "encode_legacy");
function decode_legacy(base642) {
  const binary_string = atob(base642);
  const len = binary_string.length;
  const array2 = new Uint8Array(len);
  for (let i2 = 0; i2 < len; i2++)
    array2[i2] = binary_string.charCodeAt(i2);
  return array2.buffer;
}
__name(decode_legacy, "decode_legacy");
var native = typeof Uint8Array.fromBase64 === "function";
var buffer = typeof process === "object" && process.versions?.node !== void 0;
var encode64 = native ? encode_native : buffer ? encode_buffer : encode_legacy;
var decode64 = native ? decode_native : buffer ? decode_buffer : decode_legacy;
function parse(serialized, revivers) {
  return unflatten$1(JSON.parse(serialized), revivers);
}
__name(parse, "parse");
function unflatten$1(parsed, revivers) {
  if (typeof parsed === "number")
    return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0)
    throw new Error("Invalid input");
  const values = parsed;
  const hydrated = Array(values.length);
  let hydrating = null;
  function hydrate(index, standalone = false) {
    if (index === -1)
      return void 0;
    if (index === -3)
      return NaN;
    if (index === -4)
      return Infinity;
    if (index === -5)
      return -Infinity;
    if (index === -6)
      return -0;
    if (standalone || typeof index !== "number")
      throw new Error(`Invalid input`);
    if (index in hydrated)
      return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object")
      hydrated[index] = value;
    else if (Array.isArray(value))
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers && Object.hasOwn(revivers, type) ? revivers[type] : void 0;
        if (reviver) {
          let i2 = value[1];
          if (typeof i2 !== "number")
            i2 = values.push(value[1]) - 1;
          if (Object.hasOwn(hydrated, i2))
            return hydrated[index] = reviver(hydrated[i2]);
          hydrating ??= /* @__PURE__ */ new Set();
          if (hydrating.has(i2))
            throw new Error("Invalid circular reference");
          hydrating.add(i2);
          hydrated[index] = reviver(hydrate(i2));
          hydrating.delete(i2);
          return hydrated[index];
        }
        switch (type) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i2 = 1; i2 < value.length; i2 += 1)
              set.add(hydrate(value[i2]));
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i2 = 1; i2 < value.length; i2 += 2)
              map.set(hydrate(value[i2]), hydrate(value[i2 + 1]));
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object": {
            const wrapped_index = value[1];
            if (typeof values[wrapped_index] === "object" && values[wrapped_index][0] !== "BigInt")
              throw new Error("Invalid input");
            hydrated[index] = Object(hydrate(wrapped_index));
            break;
          }
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              if (value[i2] === "__proto__")
                throw new Error("Cannot parse an object with a `__proto__` property");
              obj[value[i2]] = hydrate(value[i2 + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Float16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
          case "DataView": {
            if (values[value[1]][0] !== "ArrayBuffer")
              throw new Error("Invalid data");
            const TypedArrayConstructor = globalThis[type];
            const buffer2 = hydrate(value[1]);
            hydrated[index] = value[2] !== void 0 ? new TypedArrayConstructor(buffer2, value[2], value[3]) : new TypedArrayConstructor(buffer2);
            break;
          }
          case "ArrayBuffer": {
            const base642 = value[1];
            if (typeof base642 !== "string")
              throw new Error("Invalid ArrayBuffer encoding");
            const arraybuffer = decode64(base642);
            hydrated[index] = arraybuffer;
            break;
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const temporalName = type.slice(9);
            hydrated[index] = Temporal[temporalName].from(value[1]);
            break;
          }
          case "URL": {
            const url = new URL(value[1]);
            hydrated[index] = url;
            break;
          }
          case "URLSearchParams": {
            const url = new URLSearchParams(value[1]);
            hydrated[index] = url;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else if (value[0] === -7) {
        const len = value[1];
        if (!is_valid_array_len(len))
          throw new Error("Invalid input");
        const array2 = [];
        hydrated[index] = array2;
        array2[MAX_ARRAY_INDEX] = void 0;
        delete array2[MAX_ARRAY_INDEX];
        for (let i2 = 2; i2 < value.length; i2 += 2) {
          const idx = value[i2];
          if (!is_valid_array_index(idx) || idx >= len)
            throw new Error("Invalid input");
          array2[idx] = hydrate(value[i2 + 1]);
        }
        array2.length = len;
      } else {
        const array2 = new Array(value.length);
        hydrated[index] = array2;
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          const n2 = value[i2];
          if (n2 === -2)
            continue;
          array2[i2] = hydrate(n2);
        }
      }
    else {
      const object2 = {};
      hydrated[index] = object2;
      for (const key of Object.keys(value)) {
        if (key === "__proto__")
          throw new Error("Cannot parse an object with a `__proto__` property");
        const n2 = value[key];
        object2[key] = hydrate(n2);
      }
    }
    return hydrated[index];
  }
  __name(hydrate, "hydrate");
  return hydrate(0);
}
__name(unflatten$1, "unflatten$1");
function stringify$2(value, reducers) {
  const stringified = run(false, value, reducers);
  return typeof stringified === "string" ? stringified : `[${stringified.join(",")}]`;
}
__name(stringify$2, "stringify$2");
function run(async, value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom2 = [];
  if (reducers)
    for (const key of Object.getOwnPropertyNames(reducers))
      custom2.push({
        key,
        fn: reducers[key]
      });
  const keys = [];
  let p = 0;
  function flatten(thing, index2) {
    if (thing === void 0)
      return -1;
    if (Number.isNaN(thing))
      return -3;
    if (thing === Infinity)
      return -4;
    if (thing === -Infinity)
      return -5;
    if (thing === 0 && 1 / thing < 0)
      return -6;
    if (indexes.has(thing))
      return indexes.get(thing);
    index2 ??= p++;
    indexes.set(thing, index2);
    for (const { key, fn } of custom2) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index2] = `["${key}",${flatten(value2)}]`;
        return index2;
      }
    }
    if (typeof thing === "function")
      throw new DevalueError(`Cannot stringify a function`, keys, thing, value);
    else if (typeof thing === "symbol")
      throw new DevalueError(`Cannot stringify a Symbol primitive`, keys, thing, value);
    let str = "";
    if (is_primitive(thing))
      str = stringify_primitive(thing);
    else if (typeof thing.then === "function") {
      if (!async)
        throw new DevalueError(`Cannot stringify a Promise or thenable \u2014 use stringifyAsync instead`, keys, thing, value);
      str = Promise.resolve(thing).then((value2) => {
        const i2 = flatten(value2, index2);
        if (i2 < 0)
          stringified[index2] = i2;
      });
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt":
          str = `["Object",${flatten(thing.valueOf())}]`;
          break;
        case "Date":
          str = `["Date","${!isNaN(thing.getDate()) ? thing.toISOString() : ""}"]`;
          break;
        case "URL":
          str = `["URL",${stringify_string(thing.toString())}]`;
          break;
        case "URLSearchParams":
          str = `["URLSearchParams",${stringify_string(thing.toString())}]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array": {
          let mostly_dense = false;
          str = "[";
          for (let i2 = 0; i2 < thing.length; i2 += 1) {
            if (i2 > 0)
              str += ",";
            if (Object.hasOwn(thing, i2)) {
              keys.push(`[${i2}]`);
              str += flatten(thing[i2]);
              keys.pop();
            } else if (mostly_dense)
              str += -2;
            else {
              const populated_keys = valid_array_indices(thing);
              const population = populated_keys.length;
              const d = String(thing.length).length;
              if ((thing.length - population) * 3 > 4 + d + population * (d + 1)) {
                str = "[-7," + thing.length;
                for (let j = 0; j < populated_keys.length; j++) {
                  const key = populated_keys[j];
                  keys.push(`[${key}]`);
                  str += "," + key + "," + flatten(thing[key]);
                  keys.pop();
                }
                break;
              } else {
                mostly_dense = true;
                str += -2;
              }
            }
          }
          str += "]";
          break;
        }
        case "Set":
          str = '["Set"';
          for (const value2 of thing)
            str += `,${flatten(value2)}`;
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key, value2] of thing) {
            keys.push(`.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`);
            str += `,${flatten(key)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          str = '["' + type + '",' + flatten(typedArray.buffer);
          if (typedArray.byteLength !== typedArray.buffer.byteLength)
            str += `,${typedArray.byteOffset},${typedArray.length}`;
          str += "]";
          break;
        }
        case "DataView": {
          const view = thing;
          str = '["' + type + '",' + flatten(view.buffer);
          if (view.byteLength !== view.buffer.byteLength)
            str += `,${view.byteOffset},${view.byteLength}`;
          str += "]";
          break;
        }
        case "ArrayBuffer":
          str = `["ArrayBuffer","${encode64(thing)}"]`;
          break;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          str = `["${type}",${stringify_string(thing.toString())}]`;
          break;
        default:
          if (!is_plain_object(thing))
            throw new DevalueError(`Cannot stringify arbitrary non-POJOs`, keys, thing, value);
          if (enumerable_symbols(thing).length > 0)
            throw new DevalueError(`Cannot stringify POJOs with symbolic keys`, keys, thing, value);
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key of Object.keys(thing)) {
              if (key === "__proto__")
                throw new DevalueError(`Cannot stringify objects with __proto__ keys`, keys, thing, value);
              keys.push(stringify_key(key));
              str += `,${stringify_string(key)},${flatten(thing[key])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key of Object.keys(thing)) {
              if (key === "__proto__")
                throw new DevalueError(`Cannot stringify objects with __proto__ keys`, keys, thing, value);
              if (started)
                str += ",";
              started = true;
              keys.push(stringify_key(key));
              str += `${stringify_string(key)}:${flatten(thing[key])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index2] = str;
    return index2;
  }
  __name(flatten, "flatten");
  const index = flatten(value);
  if (index < 0)
    return `${index}`;
  return stringified;
}
__name(run, "run");
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return (-1).toString();
  if (thing === 0 && 1 / thing < 0)
    return (-6).toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
__name(stringify_primitive, "stringify_primitive");
var ACTION_QUERY_PARAMS = {
  actionName: "_action",
  actionPayload: "_astroActionPayload"
};
init_path();
var codeToStatusMap = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
var statusToCodeMap = Object.fromEntries(Object.entries(codeToStatusMap).map(([key, value]) => [value, key]));
var ActionError = /* @__PURE__ */ __name(class ActionError2 extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError2.codeToStatus(params.code);
    if (params.stack)
      this.stack = params.stack;
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static fromJson(body) {
    if (isInputError(body))
      return new ActionInputError(body.issues);
    if (isActionError(body))
      return new ActionError2(body);
    return new ActionError2({ code: "INTERNAL_SERVER_ERROR" });
  }
}, "ActionError");
function isActionError(error4) {
  return typeof error4 === "object" && error4 != null && "type" in error4 && error4.type === "AstroActionError";
}
__name(isActionError, "isActionError");
function isInputError(error4) {
  return typeof error4 === "object" && error4 != null && "type" in error4 && error4.type === "AstroActionInputError" && "issues" in error4 && Array.isArray(error4.issues);
}
__name(isInputError, "isInputError");
var ActionInputError = /* @__PURE__ */ __name(class extends ActionError {
  type = "AstroActionInputError";
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue2 of issues)
      if (issue2.path.length > 0) {
        const key = issue2.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue2.message);
      }
  }
}, "ActionInputError");
function deserializeActionResult(res) {
  if (res.type === "error") {
    let json;
    try {
      json = JSON.parse(res.body);
    } catch {
      return {
        data: void 0,
        error: new ActionError({
          message: res.body,
          code: "INTERNAL_SERVER_ERROR"
        })
      };
    }
    if (Object.assign({
      "ASSETS_PREFIX": void 0,
      "BASE_URL": "/",
      "DEV": false,
      "MODE": "production",
      "PROD": true,
      "SITE": "https://worldcompaniesmarketcap.com",
      "SSR": true
    }, {
      OS: "Windows_NT",
      _: "C:/Users/Arshad Murtaza/AppData/Local/agy/bin/agy"
    })?.PROD)
      return {
        error: ActionError.fromJson(json),
        data: void 0
      };
    else {
      const error4 = ActionError.fromJson(json);
      error4.stack = actionResultErrorStack.get();
      return {
        error: error4,
        data: void 0
      };
    }
  }
  if (res.type === "empty")
    return {
      data: void 0,
      error: void 0
    };
  return {
    data: parse(res.body, { URL: (href) => new URL(href) }),
    error: void 0
  };
}
__name(deserializeActionResult, "deserializeActionResult");
var actionResultErrorStack = /* @__PURE__ */ (/* @__PURE__ */ __name(function actionResultErrorStackFn() {
  let errorStack;
  return {
    set(stack) {
      errorStack = stack;
    },
    get() {
      return errorStack;
    }
  };
}, "actionResultErrorStackFn"))();
function getActionQueryString(name) {
  return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name }).toString()}`;
}
__name(getActionQueryString, "getActionQueryString");
(function(A) {
  return A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase", A;
})({});
new Uint8Array(new Uint16Array([1]).buffer)[0];
var C = /* @__PURE__ */ __name(() => {
  return A = "AGFzbQEAAAABKwhgAAF/YAF/AX9gAABgAn9/AX9gBH9/f38AYAN/f38Bf2ABfwBgA39/fwADPj0CAgEEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgABBQICAgYBAQYBAQEFAQEBAQECAgIBAQEDAQEHAQMDBAUBcAECAgUHAQGCAoCAAgYPAn8BQaCLBAt/AEGgiwQLB80BHgZtZW1vcnkCAAJzYQACAWUABQJpcwAGAmllAAcCc3MACAJzZQAJAml0AAoCYWkACwJpZAAMAmlwAA0CZXMADgJlZQAPA2VscwAQA2VsZQARA2VzcwASAnJpABMCcmUAFAFmABUCbXMAFgJyYQAXA2FrcwAYA2FrZQAZA2F2cwAaA2F2ZQAbA3JzYQAcBXBhcnNlAB0LX19oZWFwX2Jhc2UDAQtfaW5pdGlhbGl6ZQABGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAkHAQBBAQsBAAwBAQrcVD0oAEHYCkGAwAA2AgBB0ApBoIsENgIAQbgKQSo2AgBB1ApBgIAENgIACwQAEAALWQBB6AkgADYCACAAQQF0IgBBADsBoIsEQewJIABBoosEajYCAEHECUEANgIAQdQJQQA2AgBBzAlBADYCAEHICUEANgIAQdwJQQA2AgBB0AlBADYCAEGgiwQLuAEBAn9B7AlB7AkoAgAiBEEoajYCAAJAQdQJKAIAIgVFBEBBxAkgBDYCAAwBCyAFIAQ2AiQLQdQJIAQ2AgBB2AkgBTYCACAEIAA2AgggBEIANwIgIAQgA0EBRiIAOgAYIAQgAzYCFCAEQQA2AhAgBCACNgIEIAQgATYCACAEQQNBAUECIAAbIANBAkYiARs2AhwgBCACIAJBAmpBACAAGyABGzYCDCADQQFrQQFNBEBB8AlBAToAAAsLdwECf0HsCUHsCSgCACIEQRhqNgIAAkBB3AkoAgAiBUUEQEHICSAENgIADAELIAUgBDYCFAtB3AkgBDYCACAEIAM2AgwgBCACNgIIIAQgATYCBCAEIAA2AgBB4AkoAgAhACAEQQA2AhQgBCAANgIQQfAJQQE6AAALCABB9AkoAgALEwBBzAkoAgAoAgBBoIsEa0EBdQscAQF/QcwJKAIAKAIEIgBBoIsEa0EBdUF/IAAbCxMAQcwJKAIAKAIIQaCLBGtBAXULHAEBf0HMCSgCACgCDCIAQaCLBGtBAXVBfyAAGwsLAEHMCSgCACgCHAscAQF/QcwJKAIAKAIQIgBBoIsEa0EBdUF/IAAbCzUBAn9BfyEAAkACQAJAQcwJKAIAKAIUIgFBAWsOAgIBAAsgAUGgiwRrQQF1DwtBfiEACyAACwsAQcwJKAIALQAYCxMAQdAJKAIAKAIAQaCLBGtBAXULEwBB0AkoAgAoAgRBoIsEa0EBdQscAQF/QdAJKAIAKAIIIgBBoIsEa0EBdUF/IAAbCxwBAX9B0AkoAgAoAgwiAEGgiwRrQQF1QX8gABsLEwBB0AkoAgAoAhBBoIsEa0EBdQslAQF/QcwJQcwJKAIAIgBBJGpBxAkgABsoAgAiADYCACAAQQBHCyUBAX9B0AlB0AkoAgAiAEEUakHICSAAGygCACIANgIAIABBAEcLCABB+AktAAALCABB8AktAAALKwEBf0H8CUH8CSgCACIAQRBqQcwJKAIAQSBqIAAbKAIAIgA2AgAgAEEARwsTAEH8CSgCACgCAEGgiwRrQQF1CxMAQfwJKAIAKAIEQaCLBGtBAXULEwBB/AkoAgAoAghBoIsEa0EBdQsTAEH8CSgCACgCDEGgiwRrQQF1CwoAQfwJQQA2AgALow4BBn8jAEGA0ABrIgQkAEH4CUEBOgAAQYAIIQBBhApBgAg2AgBBnApBnosEIgFB6AkoAgBBAXRqIgU2AgBB8AlBADoAAEGACkEAOwEAQYIKQQA7AQBBiApBADoAAEH0CUEANgIAQeQJQQA6AABBjAogBEGAEGo2AgBBkAogBDYCAEGUCkEAOgAAA0AgACECQZgKIAFBAmoiADYCAAJAAkACfwJAAkAgASAFSQRAIAAvAQAiA0EJa0EFSQ0EAkACQAJAAkACQCADQeUAaw4FAQYGBgIACyADQSBGDQggA0EvRg0DIANBO0YNAgwFC0GCCi8BAA0BIAAQHkUNASABQQRqQYIIQQoQHw0BECBBmAooAgAhAEH4CS0AAA0BQYQKIAA2AgAgACICIQEMBQsgAS8BBEHtAEcNACAAEB5FDQAgASkABkLwgLyDoI6AOlINABAhQZgKKAIAIQALQYQKIAA2AgAMBgsgAS8BBCIAQSpHBEAgAEEvRw0CECIMBQtBARAjDAQLIAAhAUEAQeQJLQAADQIaDAELQfgJQQA6AAALA0ACQEGYCiABQQJqIgA2AgACQAJAAkAgASAFSQRAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAvAQAiA0Egaw4QDw4IDg4ODggBBQ4OBA4OCQALAkACQAJAAkAgA0HbAGsODwURBhERDRERAxEBERERAgALIANBCWtBBUkNESADQfsAaw4DCBAJEAtBggovAQANDyAAEB5FDQ8gAUEEakGCCEEKEB8NDxAgDA8LIAEvAQRB7QBHDQ4gABAeRQ0OIAEpAAZC8IC8g6COgDpSDQ4QIQwOCyABLwEEQewARw0NIAAQHkUNDSABQQZqQbIIQQYQHw0NIAEvAQwQJEUNDUGUCkEBOgAADA0LQYIKQYIKLwEAIgBBAWo7AQAgBEGAEGogAEEDdGoiAEEBNgIAIAAgAjYCBAwMC0GCCkGCCi8BACIAQQFqOwEAIARBgBBqIABBA3RqIgBBCDYCACAAIAI2AgQMCwtBggovAQAiAEUNDEGCCiAAQQFrOwEADAoLQYAKLwEAIgBFDQlBggovAQAiA0UNCSADQQN0IARqQfgPaigCAEEFRw0JIAQgAEECdGpBBGsoAgAiACgCBA0JIAAgAkECajYCBEGYCiABQQRqNgIAQQEQJRogAEGYCigCACIANgIQQZgKIABBAms2AgAMCQtBggovAQAiAEUNCkGCCiAAQQFrIgM7AQBBgAovAQAiAEUNCCAEQYAQaiADQf//A3FBA3RqKAIAQQVHDQggBCAAQQJ0akEEaygCACIDKAIERQRAIAMgAkECajYCBAsgAyABQQRqNgIMQYAKIABBAWs7AQAMCAsCQCACLwEAQSlHDQBB1AkoAgAiAEUNACAAKAIMIAJBAmpHDQBB1AlB2AkoAgAiADYCACAABEAgAEEANgIkDAELQcQJQQA2AgALQYIKQYIKLwEAIgBBAWo7AQAgBEGAEGogAEEDdGoiAEEGQQJBlAotAAAbNgIAIAAgAjYCBEGUCkEAOgAADAcLQYIKLwEAIgBFDQhBggogAEEBayIAOwEAIARBgBBqIABB//8DcUEDdGooAgBBBEYNAwwGCyADECYMBQsCQCABLwEEIgBBKkcEQCAAQS9HDQEQIgwHC0EBECMMBgsCQCACLwEAIgEQJwRAAkACQAJAIAFBK2sOBAEIAgAICyACQQJrLwEAQTBrQf//A3FBCkkNAwwHCyACQQJrLwEAQStGDQIMBgsgAkECay8BAEEtRg0BDAULIAFBKUcNACAEQYAQakGCCi8BAEEDdGooAgQQKA0ECwJAAkBBggovAQAiAEUgAUHmAEdyDQAgBEGAEGogAEEDdGoiA0EIaygCAEEBRw0AIAJBAmsvAQBB7wBHDQEgAkEEaxApRQ0BIANBBGsoAgBBnglBAxAqRQ0BDAULIAFB/QBHDQAgBEGAEGogAEEDdGoiACgCBBArDQQgACgCAEEGRg0ECyACECwNA0GICi0AACABQS9GcSABQQBHc0UNAwJAQdwJKAIAIgBFDQAgAiAAKAIASQ0AIAIgACgCBE0NBAsDQCACQaCLBEsEQEGECiACQQJrIgI2AgAgAi8BACIBEC1FDQELCyABQf//A3EQLgRAA0AgAkGgiwRLBEBBhAogAkECayICNgIAIAIvAQAQLg0BCwsgAhAvDQQLQYgKQQE6AAAMBAtBggpBggovAQAiAEEBajsBACAEQYAQaiAAQQN0aiIAIAI2AgQgAEEDNgIACxAwDAILQYAKLwEARUGCCi8BAEVB5AktAABBf3NxcQwFCxAxQYgKQQA6AAALQYQKQZgKKAIAIgI2AgALQZgKKAIAIQEMAQsLEDJBAAshAyAEQYDQAGokACADDwsgAiEAC0GYCigCACEBDAALAAsWACAAQaCLBEYEQEEBDwsgAEECaxAzC0MBA38CQCACRQ0AA0AgAC0AACIEIAEtAAAiBUYEQCABQQFqIQEgAEEBaiEAIAJBAWsiAg0BDAILCyAEIAVrIQMLIAML0ggBBX9BmApBmAooAgAiBEEMaiIBNgIAQdwJKAIAIQNBARAlIQICQAJAAkACQAJAAkAgAUGYCigCACIARgRAIAIQNEUNAQtB4AkgBDYCAAJAAkACQCACQSpHBEAgAkH7AEcNAUGYCiAAQQJqNgIAQQEQJSECQZwKKAIAIQFBmAooAgAhAANAAkAgAkH//wNxIgJBIkYgAkEnRnJFBEAgAhA1GkGYCigCACECDAELIAIQJkGYCkGYCigCAEECaiICNgIAC0EBECUaIAAgAhA2IgJBLEYEQEGYCkGYCigCAEECajYCAEEBECUhAgsgAkH9AEYNAyAAQZgKKAIAIgBGDQggACABTQ0ACwwHC0GYCiAAQQJqNgIAQQEQJRpBmAooAgAiACAAEDYaDAILQfgJQQA6AAACQAJAAkACQAJAAkAgAkHhAGsODAIIBAEIAwgICAgIBQALIAJB9gBGDQQMBwtBmAogAEEOaiIENgIAAkACQAJAAkBBARAlQeEAaw4GAAwCDAwBDAtBmAooAgAiASkAAkLzgOSD4I3AMVINCyABLwEKEC5FDQtBmAogAUEKajYCAEEAECUaC0GYCigCACIDQQJqQaIIQQ4QHw0KAkAgAy8BECIBECQNACABQShrDgMACwALC0GYCiADQRBqNgIAQQEQJSIBQSpGBEBBmApBmAooAgBBAmo2AgBBARAlIQELIAFBKEcNAQwKC0GYCigCACIDKQACQuyAhIOwjsA5Ug0JIAMvAQoiARAkRSABQfsAR3ENCUGYCiADQQpqNgIAQQEQJSIBQfsARg0JC0GYCigCACEDIAEQNRpBmAooAgAiASADTQ0IIAAgBCADIAEQBAwKC0GYCiAAQQpqNgIAQQAQJRpBmAooAgAhAAtBmAogAEEQajYCAEEBECUiAEEqRgRAQZgKQZgKKAIAQQJqNgIAQQEQJSEACwwJCwJAIAApAAJC7ICEg7COwDlSDQAgAC8BChAtRQ0AQZgKIABBCmo2AgBBARAlIQAMCQsgAEEEaiEAC0GYCiAAQQZqNgIAQZwKKAIAIQMDQEEBECUhAEGYCigCACIBIANLDQcgABA3IQJBmAooAgAiACABRg0EIAJBPUYEQEEBEDghAkGYCigCACEACyACQSxHDQRBmAogAEECajYCAAwACwALQfAJQQE6AABBmApBmAooAgBBAmo2AgALQQEQJSEAQZgKKAIAIQECQCAAQeYARw0AIAFBAmpBnAhBBhAfDQBBmAogAUEIajYCACAEQQEQJUEAEDkgA0EUakHICSADGyECA0AgAigCACIARQ0CIABCADcCCCAAQRRqIQIMAAsAC0GYCiABQQJrNgIACw8LIAAhAQwCCyAAIARBAEEAEARBmAogAEEMajYCAA8LEDIPC0GYCiABQQJrNgIADwtBmAooAgAhASAAEDUaIAFBmAooAgAiACABIAAQBEGYCiAAQQJrNgIAC4oLAQp/QZgKQZgKKAIAIgZBDGoiCTYCAEEBECUhAEGYCigCACECAkACQAJAAkACQAJAAn8gAEEuRgRAQZgKIAJBAmo2AgBBARAlIgBB5ABHBEAgAEHzAEcEQCAAQe0ARw0HQZgKKAIAIgBBAmpBjAhBBhAfDQdBhAooAgAiARA6RQRAIAEvAQBBLkYNCAsgBiAGIABBCGpBAhADDwtBmAooAgAiAEECakGSCEEKEB8NBkGECigCACIBEDpFBEAgAS8BAEEuRg0HC0GYCiAAQQxqNgIAQQEhCEEFIQRBARAlIQBBAQwCC0GYCigCACIAKQACQuWAmIPQjIA5Ug0FQYQKKAIAIgEQOkUEQCABLwEAQS5GDQYLQZgKIABBCmo2AgBBByEEQQEhBUEBECUhAEEBIQhBAgwBCwJAAkAgAEHzAEcgAiAJTXJFBEBB8wAhACACQQJqQZIIQQoQHw0BIAIvAQwQJEUNAUGYCiACQQxqIgA2AgBBASEIQQEQJSEBIABBmAooAgAiBEcEQEHmACEAIAFB5gBHBEBBBSEEIAEhAEEBDAULQQEhAyAEQQJqQZwIQQYQHw0FIAQvAQgQLUUNBQtBmAogAjYCAEEHIQRBASEHQQAhCCABIQBBAAwDC0EHIQRBASEHIABB5ABHIAIgBkEKak1yDQFB5AAhACACKQACQuWAmIPQjIA5Ug0AIAIvAQoQJEUNAEGYCiACQQpqNgIAQSohAEEBIQVBAiEDQQEQJSIBQSpGDQRBmAogAjYCAEEAIQUgASEAQQAMAgsgAiEEDAILQQALIQMgAEEoRgRAQYwKKAIAQYIKLwEAIgVBA3RqIgBBBTYCAEGCCiAFQQFqOwEAIABBmAooAgAiAjYCBEGECigCAC8BAEEuRg0EQZgKIAJBAmo2AgBBARAlIQAgBkGYCigCACIBQQAgAhADQdQJKAIAIQMgCARAIAMgBDYCHAtBgApBgAovAQAiBEEBajsBAEGQCigCACAEQQJ0aiADNgIAAkAgAEEiRiAAQSdGckUEQAJAIABB4ABHDQBBnAooAgAhBiABIQADQCAAIgIgBk8NAQJAAkAgAEECaiIALwEAIgdB3ABrDgUAAgICBQELIAJBBGohAAwBCyAHQSRHDQAgAi8BBEH7AEcNAAsLQZgKIAFBAms2AgAPCyAAECZBmAooAgAhAAtBmAogAEECaiIANgIAAkACQAJAQQEQJUEpaw4EAQICAAILQZgKQZgKKAIAQQJqNgIAQQEQJRogAyAANgIEQZgKKAIAIQAgA0EBOgAYIAMgADYCEAwIC0GCCiAFOwEAIAMgADYCBEGYCigCACEAIANBAToAGCADIABBAmo2AgxBgAogBDsBAA8LQZgKQZgKKAIAQQJrNgIADwsgB0UgAEH7AEdyRQRAQZgKKAIAIQBBggovAQANBkGcCigCACEBA0ACQAJAIAAgAUkEQEEBECUiAEEiRiAAQSdGcg0BIABB/QBHDQJBmApBmAooAgBBAmo2AgALQQEQJSEBQZgKKAIAIQAgAUHmAEYEQCAAQQJqQZwIQQYQHw0HC0GYCiAAQQhqNgIAQQEQJSIAQSJHIABBJ0dxDQYgBiAAQQAQOQ8LIAAQJgtBmApBmAooAgBBAmoiADYCAAwACwALAkACQCAAQSdrDgQDAQEDAAsgAEEiRg0CC0GYCigCACEECyAEIAlHDQBBmAogBEECazYCAA8LIABBKkcgBXENAkGCCi8BAA0CQZgKKAIAIQBBnAooAgAhAgNAIAAgAk8NASAALwEAIgFBJ0cgAUEiR3EEQEGYCiAAQQJqIgA2AgAMAQUgBiABIAMQOQ8LAAsACxAyCw8LQZgKQZgKKAIAQQJrNgIADwtBmAogAEECazYCAAtDAQN/QZgKKAIAIQBBnAooAgAhAgNAAkAgAEECaiEBIAAgAk8NACABIQAgAS8BAEEKaw4EAAEBAAELC0GYCiABNgIAC3ABBH9BmAooAgBBAmohAUGcCigCACEEAkADQCABIgJBAmohASACIARPDQEgAS8BACEDAkAgAEUEQCADQSpGDQEgA0EKaw4EAwICAwILIANBKkcNAQsgAi8BBEEvRw0ACyACQQRqIQELQZgKIAE2AgALCwAgAEGfgIAEEDwLfQEEf0GcCigCACEDQZgKKAIAIQEDQAJAAkACQCABLwEAIgJBL0YEQCABLwECIgFBKkcEQCABQS9GDQJBLw8LIAAQIwwCCyAABEAgAhAkDQIMAwsgAhAuDQEMAgsQIgtBmApBmAooAgAiBEECaiIBNgIAIAMgBEsNAQsLIAILhgEBBH9BmAooAgAhAUGcCigCACEEAkADQAJAIAEiAkECaiEBIAIgBE8NACABLwEAIgMgAEYNAiADQdwARwRAIANBCmsOBAECAgECCyACQQRqIQEgAi8BBEENRw0BIAJBBmogASACLwEGQQpGGyEBDAELC0GYCiABNgIAEDIPC0GYCiABNgIAC24BAX8CQCAAQSlHIABBKGtB//8DcUEHSXEgAEEhayIBQQVNQQBBASABdEExcRtyRQRAIABBOmsiAUH//wNxQSVPQr+AgICgAiABrYinQQFxRXINAQtBAQ8LIABB/QBHIABB+wBrQf//A3FBBElxCy4BAX9BASEBAkAgAEGUCUEFECoNACAAQZ4JQQMQKg0AIABBpAlBAhAqIQELIAELbwEBfwJ/IAAvAQAiARAkIAFBKUZyIAFB/QBGckUEQEEAIAFB3QBHDQEaCwNAAkAgAEGgiwRNDQAgARAkRQ0AIABBAmsiAC8BACEBDAELC0EBIAFBKUYgAUHdAEZyIAFB/QBGcg0AGiABEDRBAXMLCz4BAn8CQCAAIAJBAXQiAmsiBEECaiIAQaCLBEkNACAAIAEgAhAfDQAgAEGgiwRGBEBBAQ8LIAQQMyEDCyADC4MBAQJ/QQEhAgJAAkACQAJAAkACQCAALwEAIgFBO2sOBAUEBAEACwJAIAFB5QBrDgQDBAQCAAsgAUEpRg0EIAFB+QBHDQMgAEECa0GwCUEGECoPCyAAQQJrLwEAQT1GDwsgAEECa0GoCUEEECoPCyAAQQJrQbwJQQMQKg8LQQAhAgsgAguqAwECfwJAAkACQAJAAkACQAJAAkACQAJAIAAvAQBB5ABrDhQAAQIJCQkJAwkJBAUJCQYJBwkJCAkLAkACQCAAQQJrLwEAQekAaw4EAAoKAQoLIABBBGtBuAhBAhAqDwsgAEEEa0G8CEEDECoPCwJAAkACQCAAQQJrLwEAQfMAaw4DAAECCgsgAEEEay8BACIBQeEARwRAIAFB7ABHDQogAEEGa0HlABA7DwsgAEEGa0HjABA7DwsgAEEEa0HCCEEEECoPCyAAQQRrQcoIQQYQKg8LIABBAmsvAQBB7wBHDQYgAEEEay8BAEHlAEcNBiAAQQZrLwEAIgFB8ABHBEAgAUHjAEcNByAAQQhrQdYIQQYQKg8LIABBCGtB4ghBAhAqDwsgAEECa0HmCEEEECoPC0EBIQIgAEECayIAQekAEDsNBCAAQe4IQQUQKg8LIABBAmtB5AAQOw8LIABBAmtB+AhBBxAqDwsgAEECa0GGCUEEECoPCyAAQQJrLwEAIgFB7wBHBEAgAUHlAEcNASAAQQRrQe4AEDsPCyAAQQRrQY4JQQMQKiECCyACCzQBAX8gAEGgAUYgAEEJayIBQRdNQQBBASABdEGfgIAEcRtyRQRAIAAQNCAAQS5HcQ8LQQELCwAgAEGNgIAEEDwLSAECfwJAIAAvAQAiAkHlAEcEQCACQesARw0BIABBAmtB5ghBBBAqDwsgAEECay8BAEH1AEcNACAAQQRrQcoIQQYQKiEBCyABC94BAQR/QZgKKAIAIQBBnAooAgAhAwJAAkADQAJAIAAiAUECaiEAIAEgA08NAAJAAkACQCAALwEAIgJB3ABrDgUCBAQEAQALIAJBJEcNAyABLwEEQfsARw0DQZgKIAFBBGoiAjYCAEGMCigCAEGCCi8BACIAQQN0aiIBQQQ2AgBBggogAEEBajsBACABIAI2AgQPC0GYCiAANgIAQYIKQYIKLwEAQQFrIgE7AQBBjAooAgAgAUH//wNxQQN0aigCAEEDRw0DDAQLIAFBBGohAAwBCwtBmAogADYCAAsQMgsL2wEBBH9BmAooAgAhAEGcCigCACEDA0AgAEECaiEBAkACQCAAIANPDQACQAJAAkAgAS8BACICQdsAaw4CAQIACyABIQAgAkEKaw4EAgQEAgMLAkADQAJAIAFBAmohACABIANPDQACQAJAIAAvAQAiAkHcAGsOAgAEAQsgAUEEaiEBDAILIAAhASACQQprDgQAAQEAAQsLQZgKIAA2AgAQMkGYCigCACEADAQLQZgKIAA2AgAMAwsgAEEEaiEADAILQZgKIAE2AgAQMg8LIAJBL0cNAAtBmAogADYCAAszAQF/QeQJQQE6AABBmAooAgAhAEGYCkGcCigCAEECajYCAEH0CSAAQaCLBGtBAXU2AgALPQEBfwJ/QQEgAC8BACIBQQlrQf//A3FBBUkgAUGAAXJBoAFGcg0AGkEAIAEQNEUNABogABA6IAFBLkdyCwteAQF/AkAgAEH4/wNxQShGIABBIWsiAUEFTUEAQQEgAXRBMXEbckUEQCAAQTprIgFB//8DcUElT0K/gICAoAMgAa2Ip0EBcUVyDQELQQEPCyAAQfsAa0H//wNxQQRJC1cBA39BmAooAgAhAQNAAkAgAEH//wNxIgIQJARAIAAhAwwBCyAAIQMgAhA0DQBBACEDQZgKIAFBAmoiAjYCACABLwECIQAgAiEBIAANAQsLIANB//8DcQulAQEEfwJAQZgKKAIAIgMvAQAiBUHhAEcEQCABIQIgACEEDAELQZgKIANBBGo2AgBBARAlIQJBmAooAgAhBAJAIAJBIkYgAkEnRnJFBEAgAhA1GkGYCigCACECDAELIAIQJkGYCkGYCigCAEECaiICNgIAC0EBECUhBUGYCigCACEDCyADIARHBEAgBCACQQAgACAAIAFGIgAbQQAgASAAGxAECyAFC9MEAQd/QZgKKAIAIQECQCAAQd//A3FB2wBGBEAgAS8BACEFQZgKIAFBAmo2AgBB/QBB3QAgBUH7AEYbIQZBARAlIQNBnAooAgAhBwNAAkAgBiADQf//A3EiAkZBmAooAgAiASAHS3INAAJAIAJBLkcNACABLwECQS5HDQAgAS8BBEEuRw0AQZgKIAFBBmo2AgBBARAlEDchAwwCCwJAAn8CQCAFQfsARgRAAkAgAkEiRiACQSdGckUEQCACQdsARw0BQQAQOBpBmApBmAooAgBBAmo2AgAgAQwECyACECZBmApBmAooAgBBAmo2AgAgAQwDCyABIQAgA0Ewa0H//wNxQQlLDQEDQCAAIgJBAmohACACLwECIgNBMGtB//8DcUEKSQ0AIANBwQBrIgRBHk1BAEEBIAR0Qb+AgYQEcRsNACADQeEAayIEQRdNQQBBASAEdEG/wIEEcRsNAAJAAkAgA0Eraw4EAAEAAgELIAIvAQBBIHJB5QBGDQELC0GYCiAANgIAIAEMAgsgAkEsRgRAQZgKIAFBAmo2AgBBARAlIQMMBQsgAhA3IQIMAgsgAhA1GkGYCigCAAshAEEBECUiAkE6RgRAQZgKQZgKKAIAQQJqNgIAQQEQJRA3IQIMAQsgACABTQ0AIAEgACABIAAQBAsgAkE9RgRAQQAQOCECC0GYCigCACEBIAJBLEcNAEGYCiABQQJqNgIAQQEQJSEDDAELC0GYCiABQQJqNgIADAELIAAQNRpBmAooAgAiACABTQ0AIAEgACABIAAQBAtBARAlC54NAQx/QYQKQZgKKAIAIgE2AgBBkAooAgAhCkGMCigCACEHQZwKKAIAIQxBggovAQAhCyABIgQhAgJAA0BBmAogAkECaiIJNgIAIAIgDE8EQEEAIQYMAgsCQAJAIAkvAQAiAxAuDQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkBBggovAQAiBSALRw0AIAMhBgJAAkAgA0Epaw4EGgEBGgALIANBO0YgA0HdAEZyIANB/QBGcg0XCyAAIAhxQQFHDQACQCADQSJrDg4MExMTEwwFCRMTCBMTDQALAkAgA0HbAGsODwYTBxMTDhMTBBMCExMTAwALAkAgA0H7AGsOAwoTCwALIANBCmsOBBgSEhgSCwJAIANBImsODgsSEhISCwQIEhIHEhIMAAsCQCADQdsAaw4PBRIGEhINEhIDEgESEhICAAsCQCADQQprDgQVEhIVAAsgA0H7AGsOAwgRCRELIAUNECAJEB5FDRAgAkEEakGCCEEKEB8NEBAgDBALIAIvAQRB7QBHDQ8gCRAeRQ0PIAIpAAZC8IC8g6COgDpSDQ8QIQwPCyACLwEEQewARw0OIAkQHkUNDiACQQZqQbIIQQYQHw0OIAIvAQwQJEUNDkGUCkEBOgAADA4LIAcgBUEDdGoiAUEBNgIAQYIKIAVBAWo7AQAgASAENgIEDA0LIAcgBUEDdGoiAUEINgIAQYIKIAVBAWo7AQAgASAENgIEDAwLIAVFDQxBggogBUEBazsBAAwLCyAFRQ0KQYAKLwEAIgFFDQogByAFQQN0akEIaygCAEEFRw0KIAogAUECdGpBBGsoAgAiASgCBA0KIAEgBEECajYCBEGYCiACQQRqNgIAQQEQJRogAUGYCigCACIBNgIQQZgKIAFBAms2AgAMCgsgBUUNCkGCCiAFQQFrIgY7AQBBgAovAQAiAUUNCSAHIAZB//8DcUEDdGooAgBBBUcNCSAKIAFBAnRqQQRrKAIAIgYoAgRFBEAgBiAEQQJqNgIECyAGIAJBBGo2AgxBgAogAUEBazsBAAwJCwJAIAQvAQBBKUcNAEHUCSgCACIBRQ0AIAEoAgwgBEECakcNAEHUCUHYCSgCACIBNgIAIAEEQCABQQA2AiQMAQtBxAlBADYCAAsgByAFQQN0aiIBQQZBAkGUCi0AABs2AgBBggogBUEBajsBACABIAQ2AgRBlApBADoAAAwICyAFRQ0IQYIKIAVBAWsiATsBACAHIAFB//8DcUEDdGooAgBBBEYNAwwHCyADECYMBgsCQCACLwEEIgJBKkcEQCACQS9HDQEQIgwJC0EBECMMCAsCQCAELwEAIgEQJwRAAkACQAJAIAFBK2sOBAEJAgAJCyAEQQJrLwEAQTBrQf//A3FBCkkNAwwICyAEQQJrLwEAQStGDQIMBwsgBEECay8BAEEtRg0BDAYLIAFBKUcNACAHIAVBA3RqKAIEECgNBQsCQAJAIAVFIAFB5gBHcg0AIAcgBUEDdGoiAkEIaygCAEEBRw0AIARBAmsvAQBB7wBHDQEgBEEEaxApRQ0BIAJBBGsoAgBBnglBAxAqRQ0BDAYLIAFB/QBHDQAgByAFQQN0aiICKAIEECsNBSACKAIAQQZGDQULIAQQLA0EQYgKLQAAIAFBL0ZxIAFBAEdzRQ0EQdwJKAIAIgZFDQIgBCAGKAIASQ0CIAQiAiAGKAIETQ0EDAMLIAcgBUEDdGoiASAENgIEQYIKIAVBAWo7AQAgAUEDNgIACxAwDAMLIAQhAgsDQCACQaCLBEsEQCACQQJrIgIvAQAiARAtRQ0BCwsgARAuBEADQCACQaCLBEsEQEGECiACQQJrIgI2AgAgAi8BABAuDQELCyACEC8NAQtBiApBAToAAAwBCxAxQYgKQQA6AAALQYQKQZgKKAIAIgE2AgAMAQsQMgtBACEGQeQJLQAADQMCQCABIARGBEAgAEUNAUGCCi8BACALRiAIcUUNAUEBIQggASEEQZgKKAIALwEAIgZBCmsOBAUCAgUCCyADQS9GBEBBiAotAABBAXMhCAwBC0EBIQggA0Ewa0H//wNxQQpJIANB3/8DcUHBAGtB//8DcUEaSXIgA0EkRiADQd8ARnJyIANB/wBLcg0AIAEhBAJAAkAgA0Enaw4DAwEDAAsCQCADQd0Aaw4EAwEBAwALIANBIkYgA0H9AEZyDQELQQAhCAsgASEEC0GYCigCACECDAELCyADDwsgBguvBAEHfyABQSJGIAFBJ0ZyRQRAEDIPC0GYCigCACEDIAEQJiAAIANBAmpBmAooAgBBARADIAIEQEHUCSgCAEEEQQYgAkEBRhs2AhwLQZgKQZgKKAIAQQJqNgIAQQAQJSEAQZgKKAIAIQQCQAJAIABB9wBHDQAgBC8BAkHpAEcNACAELwEEQfQARw0AIAQvAQZB6ABGDQELQZgKIARBAms2AgAPC0GYCiAEQQhqNgIAAkBBARAlQfsARwRADAELQewJKAIAIQNB1AkoAgAhBUGYCigCACIGIQBBACECA0AgAyEBQZgKIABBAmo2AgBBARAlIQBBmAooAgAhBwJAAkACQCAAQSJHBEAgAEEnRw0BQScQJgwCC0EiECYMAQsgABA1IQNBmAooAgAhAAwBC0GYCigCAEECaiEAQZgKIAA2AgBBARAlIQMLIANBOkcEQAwCC0GYCkGYCigCAEECajYCAEEBECUiA0EiRiADQSdGckUEQAwCC0GYCigCACEIIAMQJkHsCSABQRRqIgM2AgBBmAooAgAhCSABQQA2AhAgASAINgIIIAEgADYCBCABIAc2AgAgASAJQQJqIgA2AgwCQCACRQRAIAUgATYCIAwBCyACIAE2AhALQZgKIAA2AgACQEEBECUiAEEsRwRAIABB/QBGDQEMAwtBmApBmAooAgBBAmoiADYCACABIQIMAQsLIAUgBjYCECAFQZgKKAIAQQJqNgIMDwtBmAogBDYCAAstAQF/AkAgAC8BAEEuRw0AIABBAmsvAQBBLkcNACAAQQRrLwEAQS5GIQELIAELNQEBfwJAIABBoIsESQ0AIAAvAQAgAUcNACAAQaCLBEYEQEEBDwsgAEECay8BABAtIQILIAILKQEBfyAAQaABRiAAQQlrIgJBF01BAEEBIAJ0IAFxG3JFBEBBAA8LQQELC8cBAQBBgggLvwF4AHAAbwByAHQAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AbABhAHMAcwB2AG8AeQBpAGUAZABlAGwAZQBjAG8AbgB0AGkAbgBpAG4AcwB0AGEAbgB0AHkAYgByAGUAYQByAGUAdAB1AHIAZABlAGIAdQBnAGcAZQBhAHcAYQBpAHQAaAByAHcAaABpAGwAZQBmAG8AcgBpAGYAYwBhAHQAYwBmAGkAbgBhAGwAbABlAGwAcw==", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), (A2) => A2.charCodeAt(0));
  var A;
}, "C");
WebAssembly.compile(C()).then(WebAssembly.instantiate).then(({ exports: A }) => {
});
init_util();
init_constants();
init_errors_data();
init_errors$3();
init_path();
init_request_body();
function getActionContext(context2) {
  const callerInfo = getCallerInfo(context2);
  const actionResultAlreadySet = Boolean(context2.locals._actionPayload);
  let action = void 0;
  if (callerInfo && context2.request.method === "POST" && !actionResultAlreadySet)
    action = {
      calledFrom: callerInfo.from,
      name: callerInfo.name,
      handler: async () => {
        const pipeline = Reflect.get(context2, pipelineSymbol);
        const callerInfoName = shouldAppendForwardSlash(pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
        let baseAction;
        try {
          baseAction = await pipeline.getAction(callerInfoName);
        } catch (error4) {
          if (error4 instanceof Error && "name" in error4 && typeof error4.name === "string" && error4.name === ActionNotFoundError.name)
            return {
              data: void 0,
              error: new ActionError({ code: "NOT_FOUND" })
            };
          throw error4;
        }
        const bodySizeLimit = pipeline.manifest.actionBodySizeLimit;
        let input;
        try {
          input = await parseRequestBody(context2.request, bodySizeLimit);
        } catch (e2) {
          if (e2 instanceof ActionError)
            return {
              data: void 0,
              error: e2
            };
          if (e2 instanceof TypeError)
            return {
              data: void 0,
              error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" })
            };
          throw e2;
        }
        const omitKeys = [
          "props",
          "getActionResult",
          "callAction",
          "redirect"
        ];
        const actionAPIContext = Object.create(Object.getPrototypeOf(context2), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(context2)).filter(([key]) => !omitKeys.includes(key))));
        Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
        return baseAction.bind(actionAPIContext)(input);
      }
    };
  function setActionResult(actionName, actionResult) {
    context2.locals._actionPayload = {
      actionResult,
      actionName
    };
  }
  __name(setActionResult, "setActionResult");
  return {
    action,
    setActionResult,
    serializeActionResult,
    deserializeActionResult
  };
}
__name(getActionContext, "getActionContext");
function getCallerInfo(ctx) {
  if (ctx.routePattern === "/_actions/[...path]")
    return {
      from: "rpc",
      name: ctx.url.pathname.replace(/^.*\/_actions\//, "")
    };
  const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (queryParam)
    return {
      from: "form",
      name: queryParam
    };
}
__name(getCallerInfo, "getCallerInfo");
async function parseRequestBody(request, bodySizeLimit) {
  const contentType = request.headers.get("content-type");
  const contentLengthHeader = request.headers.get("content-length");
  const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
  const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
  if (!contentType)
    return void 0;
  if (hasContentLength && contentLength > bodySizeLimit)
    throw new ActionError({
      code: "CONTENT_TOO_LARGE",
      message: `Request body exceeds ${bodySizeLimit} bytes`
    });
  try {
    if (hasContentType(contentType, formContentTypes)) {
      if (!hasContentLength) {
        const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
        return await new Request(request.url, {
          method: request.method,
          headers: request.headers,
          body: toArrayBuffer(body)
        }).formData();
      }
      return await request.clone().formData();
    }
    if (hasContentType(contentType, ["application/json"])) {
      if (contentLength === 0)
        return void 0;
      if (!hasContentLength) {
        const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
        if (body.byteLength === 0)
          return void 0;
        return JSON.parse(new TextDecoder().decode(body));
      }
      return await request.clone().json();
    }
  } catch (e2) {
    if (e2 instanceof BodySizeLimitError)
      throw new ActionError({
        code: "CONTENT_TOO_LARGE",
        message: `Request body exceeds ${bodySizeLimit} bytes`
      });
    throw e2;
  }
  throw new TypeError("Unsupported content type");
}
__name(parseRequestBody, "parseRequestBody");
var ACTION_API_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol.for("astro.actionAPIContext");
var formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
  const type = contentType.split(";")[0].toLowerCase();
  return expected.some((t2) => type === t2);
}
__name(hasContentType, "hasContentType");
function serializeActionResult(res) {
  if (res.error) {
    if (Object.assign({
      "ASSETS_PREFIX": void 0,
      "BASE_URL": "/",
      "DEV": false,
      "MODE": "production",
      "PROD": true,
      "SITE": "https://worldcompaniesmarketcap.com",
      "SSR": true
    }, {
      OS: "Windows_NT",
      _: "C:/Users/Arshad Murtaza/AppData/Local/agy/bin/agy"
    })?.DEV)
      actionResultErrorStack.set(res.error.stack);
    let body2;
    if (res.error instanceof ActionInputError)
      body2 = {
        type: res.error.type,
        issues: res.error.issues,
        fields: res.error.fields
      };
    else
      body2 = {
        ...res.error,
        message: res.error.message
      };
    return {
      type: "error",
      status: res.error.status,
      contentType: "application/json",
      body: JSON.stringify(body2)
    };
  }
  if (res.data === void 0)
    return {
      type: "empty",
      status: 204
    };
  let body;
  try {
    body = stringify$2(res.data, { URL: (value) => value instanceof URL && value.href });
  } catch (e2) {
    let hint = ActionsReturnedInvalidDataError.hint;
    if (res.data instanceof Response)
      hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
    throw new AstroError({
      ...ActionsReturnedInvalidDataError,
      message: ActionsReturnedInvalidDataError.message(String(e2)),
      hint
    });
  }
  return {
    type: "data",
    status: 200,
    contentType: "application/json+devalue",
    body
  };
}
__name(serializeActionResult, "serializeActionResult");
function toArrayBuffer(buffer2) {
  const copy = new Uint8Array(buffer2.byteLength);
  copy.set(buffer2);
  return copy.buffer;
}
__name(toArrayBuffer, "toArrayBuffer");
function hasActionPayload(locals) {
  return "_actionPayload" in locals;
}
__name(hasActionPayload, "hasActionPayload");
function createGetActionResult(locals) {
  return (actionFn) => {
    if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName))
      return;
    return deserializeActionResult(locals._actionPayload.actionResult);
  };
}
__name(createGetActionResult, "createGetActionResult");
function createCallAction(context2) {
  return (baseAction, input) => {
    Reflect.set(context2, ACTION_API_CONTEXT_SYMBOL, true);
    return baseAction.bind(context2)(input);
  };
}
__name(createCallAction, "createCallAction");
function computeFallbackRoute(options) {
  const { pathname, responseStatus, fallback, fallbackType, locales, defaultLocale, strategy, base } = options;
  if (responseStatus !== 404)
    return { type: "none" };
  if (!fallback || Object.keys(fallback).length === 0)
    return { type: "none" };
  const urlLocale = pathname.split("/").find((segment) => {
    for (const locale of locales)
      if (typeof locale === "string") {
        if (locale === segment)
          return true;
      } else if (locale.path === segment)
        return true;
    return false;
  });
  if (!urlLocale)
    return { type: "none" };
  if (!Object.keys(fallback).includes(urlLocale))
    return { type: "none" };
  const fallbackLocale = fallback[urlLocale];
  const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
  let newPathname;
  if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales")
    if (pathname.includes(`${base}`))
      newPathname = pathname.replace(`/${urlLocale}`, ``);
    else
      newPathname = pathname.replace(`/${urlLocale}`, `/`);
  else
    newPathname = pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
  return {
    type: fallbackType,
    pathname: newPathname
  };
}
__name(computeFallbackRoute, "computeFallbackRoute");
init_path$1();
var I18nRouter = /* @__PURE__ */ __name(class {
  #strategy;
  #defaultLocale;
  #locales;
  #base;
  #domains;
  constructor(options) {
    this.#strategy = options.strategy;
    this.#defaultLocale = options.defaultLocale;
    this.#locales = options.locales;
    this.#base = options.base === "/" ? "/" : removeTrailingForwardSlash(options.base || "");
    this.#domains = options.domains;
  }
  /**
  * Evaluate routing strategy for a pathname.
  * Returns decision object (not HTTP Response).
  */
  match(pathname, context2) {
    if (this.shouldSkipProcessing(pathname, context2))
      return { type: "continue" };
    switch (this.#strategy) {
      case "manual":
        return { type: "continue" };
      case "pathname-prefix-always":
        return this.matchPrefixAlways(pathname, context2);
      case "domains-prefix-always":
        if (this.localeHasntDomain(context2.currentLocale, context2.currentDomain))
          return { type: "continue" };
        return this.matchPrefixAlways(pathname, context2);
      case "pathname-prefix-other-locales":
        return this.matchPrefixOtherLocales(pathname, context2);
      case "domains-prefix-other-locales":
        if (this.localeHasntDomain(context2.currentLocale, context2.currentDomain))
          return { type: "continue" };
        return this.matchPrefixOtherLocales(pathname, context2);
      case "pathname-prefix-always-no-redirect":
        return this.matchPrefixAlwaysNoRedirect(pathname, context2);
      case "domains-prefix-always-no-redirect":
        if (this.localeHasntDomain(context2.currentLocale, context2.currentDomain))
          return { type: "continue" };
        return this.matchPrefixAlwaysNoRedirect(pathname, context2);
      default:
        return { type: "continue" };
    }
  }
  /**
  * Check if i18n processing should be skipped for this request
  */
  shouldSkipProcessing(pathname, context2) {
    if (pathname.includes("/404") || pathname.includes("/500"))
      return true;
    if (pathname.includes("/_server-islands/"))
      return true;
    if (context2.isReroute)
      return true;
    if (context2.routeType && context2.routeType !== "page" && context2.routeType !== "fallback")
      return true;
    return false;
  }
  /**
  * Strategy: pathname-prefix-always
  * All locales must have a prefix, including the default locale.
  */
  matchPrefixAlways(pathname, _context) {
    if (pathname === this.#base + "/" || pathname === this.#base)
      return {
        type: "redirect",
        location: `${this.#base === "/" ? "" : this.#base}/${this.#defaultLocale}`
      };
    if (!pathHasLocale(pathname, this.#locales))
      return { type: "notFound" };
    return { type: "continue" };
  }
  /**
  * Strategy: pathname-prefix-other-locales
  * Default locale has no prefix, other locales must have a prefix.
  */
  matchPrefixOtherLocales(pathname, _context) {
    let pathnameContainsDefaultLocale = false;
    for (const segment of pathname.split("/"))
      if (normalizeTheLocale(segment) === normalizeTheLocale(this.#defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    if (pathnameContainsDefaultLocale)
      return {
        type: "notFound",
        location: pathname.replace(`/${this.#defaultLocale}`, "")
      };
    return { type: "continue" };
  }
  /**
  * Strategy: pathname-prefix-always-no-redirect
  * Like prefix-always but allows root to serve instead of redirecting
  */
  matchPrefixAlwaysNoRedirect(pathname, _context) {
    if (pathname === this.#base + "/" || pathname === this.#base)
      return { type: "continue" };
    if (!pathHasLocale(pathname, this.#locales))
      return { type: "notFound" };
    return { type: "continue" };
  }
  /**
  * Check if the current locale doesn't belong to the configured domain.
  * Used for domain-based routing strategies.
  */
  localeHasntDomain(currentLocale, currentDomain) {
    if (!this.#domains || !currentDomain)
      return false;
    if (!currentLocale)
      return false;
    const localesForDomain = this.#domains[currentDomain];
    if (!localesForDomain)
      return true;
    return !localesForDomain.includes(currentLocale);
  }
}, "I18nRouter");
init_path$1();
init_base_pipeline();
init_util();
var I18n = /* @__PURE__ */ __name(class {
  #i18n;
  #base;
  #trailingSlash;
  #format;
  #router;
  constructor(i18n, base, trailingSlash, format) {
    this.#i18n = i18n;
    this.#base = base;
    this.#trailingSlash = trailingSlash;
    this.#format = format;
    this.#router = new I18nRouter({
      strategy: i18n.strategy,
      defaultLocale: i18n.defaultLocale,
      locales: i18n.locales,
      base,
      domains: i18n.domainLookupTable ? Object.keys(i18n.domainLookupTable).reduce((acc, domain2) => {
        const locale = i18n.domainLookupTable[domain2];
        if (!acc[domain2])
          acc[domain2] = [];
        acc[domain2].push(locale);
        return acc;
      }, {}) : void 0
    });
  }
  async finalize(state, response) {
    state.pipeline.usedFeatures |= PipelineFeatures.i18n;
    const i18n = this.#i18n;
    if (state.skipErrorReroute && typeof i18n.fallback === "undefined")
      return response;
    if (state.responseRouteType !== "page" && state.responseRouteType !== "fallback")
      return response;
    const url = state.url;
    const currentLocale = state.computeCurrentLocale();
    const isPrerendered = state.routeData.prerender;
    const routerContext = {
      currentLocale,
      currentDomain: url.hostname,
      routeType: state.responseRouteType,
      isReroute: false
    };
    const routeDecision = this.#router.match(url.pathname, routerContext);
    switch (routeDecision.type) {
      case "redirect": {
        let location = routeDecision.location;
        if (shouldAppendForwardSlash(this.#trailingSlash, this.#format))
          location = appendForwardSlash(location);
        return new Response(null, {
          status: routeDecision.status ?? 302,
          headers: { Location: location }
        });
      }
      case "notFound": {
        if (isPrerendered) {
          const prerenderedRes = new Response(response.body, {
            status: 404,
            headers: response.headers
          });
          state.skipErrorReroute = true;
          if (routeDecision.location)
            prerenderedRes.headers.set("Location", routeDecision.location);
          return prerenderedRes;
        }
        const headers = new Headers();
        if (routeDecision.location)
          headers.set("Location", routeDecision.location);
        return new Response(null, {
          status: 404,
          headers
        });
      }
      case "continue":
        break;
    }
    if (i18n.fallback && i18n.fallbackType) {
      const effectiveStatus = state.responseRouteType === "fallback" ? 404 : response.status;
      const fallbackDecision = computeFallbackRoute({
        pathname: url.pathname,
        responseStatus: effectiveStatus,
        currentLocale,
        fallback: i18n.fallback,
        fallbackType: i18n.fallbackType,
        locales: i18n.locales,
        defaultLocale: i18n.defaultLocale,
        strategy: i18n.strategy,
        base: this.#base
      });
      switch (fallbackDecision.type) {
        case "redirect":
          return new Response(null, {
            status: 302,
            headers: { Location: fallbackDecision.pathname + url.search }
          });
        case "rewrite":
          return await state.rewrite(fallbackDecision.pathname + url.search);
        case "none":
          break;
      }
    }
    return response;
  }
}, "I18n");
init_errors_data();
init_errors$2();
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales)
    if (typeof loopLocale === "string") {
      if (loopLocale === locale)
        return loopLocale;
    } else
      for (const code of loopLocale.codes)
        if (code === locale)
          return loopLocale.path;
  throw new AstroError(i18nNoLocaleFoundInPath);
}
__name(getPathByLocale, "getPathByLocale");
function getAllCodes(locales) {
  const result = [];
  for (const loopLocale of locales)
    if (typeof loopLocale === "string")
      result.push(loopLocale);
    else
      result.push(...loopLocale.codes);
  return result;
}
__name(getAllCodes, "getAllCodes");
function parseLocale(header) {
  if (header === "*")
    return [{
      locale: header,
      qualityValue: void 0
    }];
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split)
      continue;
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice(2));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1)
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      else
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
    } else
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
  }
  return result;
}
__name(parseLocale, "parseLocale");
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*")
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    return true;
  }).sort((a2, b) => {
    if (a2.qualityValue && b.qualityValue)
      return Math.sign(b.qualityValue - a2.qualityValue);
    return 0;
  });
}
__name(sortAndFilterLocales, "sortAndFilterLocales");
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const firstResult = sortAndFilterLocales(parseLocale(acceptHeader), locales).at(0);
    if (firstResult && firstResult.locale !== "*") {
      outer:
        for (const currentLocale of locales)
          if (typeof currentLocale === "string") {
            if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
              result = currentLocale;
              break;
            }
          } else
            for (const currentCode of currentLocale.codes)
              if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
                result = currentCode;
                break outer;
              }
    }
  }
  return result;
}
__name(computePreferredLocale, "computePreferredLocale");
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*")
      return getAllCodes(locales);
    else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList)
        for (const loopLocale of locales)
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale))
              result.push(loopLocale);
          } else
            for (const code of loopLocale.codes)
              if (code === browserLocale.locale)
                result.push(code);
    }
  }
  return result;
}
__name(computePreferredLocaleList, "computePreferredLocaleList");
function computeCurrentLocale(pathname, locales, defaultLocale) {
  for (const segment of pathname.split("/").map(normalizeThePath))
    for (const locale of locales)
      if (typeof locale === "string") {
        if (!segment.includes(locale))
          continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment))
          return locale;
      } else if (locale.path === segment)
        return locale.codes.at(0);
      else
        for (const code of locale.codes)
          if (normalizeTheLocale(code) === normalizeTheLocale(segment))
            return code;
  for (const locale of locales)
    if (typeof locale === "string") {
      if (locale === defaultLocale)
        return locale;
    } else if (locale.path === defaultLocale)
      return locale.codes.at(0);
}
__name(computeCurrentLocale, "computeCurrentLocale");
function computeCurrentLocaleFromParams(params, locales) {
  const byNormalizedCode = /* @__PURE__ */ new Map();
  const byPath = /* @__PURE__ */ new Map();
  for (const locale of locales)
    if (typeof locale === "string")
      byNormalizedCode.set(normalizeTheLocale(locale), locale);
    else {
      byPath.set(locale.path, locale.codes[0]);
      for (const code of locale.codes)
        byNormalizedCode.set(normalizeTheLocale(code), code);
    }
  for (const value of Object.values(params)) {
    if (!value)
      continue;
    const pathMatch = byPath.get(value);
    if (pathMatch)
      return pathMatch;
    const codeMatch = byNormalizedCode.get(normalizeTheLocale(value));
    if (codeMatch)
      return codeMatch;
  }
}
__name(computeCurrentLocaleFromParams, "computeCurrentLocaleFromParams");
init_errors$2();
async function callMiddleware(onRequest2, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = /* @__PURE__ */ __name(async (payload) => {
    nextCalled = true;
    responseFunctionPromise = responseFunction(apiContext, payload);
    return responseFunctionPromise;
  }, "next");
  const middlewarePromise = onRequest2(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled)
      if (typeof value !== "undefined") {
        if (value instanceof Response === false)
          throw new AstroError(MiddlewareNotAResponse);
        return value;
      } else if (responseFunctionPromise)
        return responseFunctionPromise;
      else
        throw new AstroError(MiddlewareNotAResponse);
    else if (typeof value === "undefined")
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    else if (value instanceof Response === false)
      throw new AstroError(MiddlewareNotAResponse);
    else
      return value;
  });
}
__name(callMiddleware, "callMiddleware");
init_errors$3();
init_errors_data();
var EMPTY_OPTIONS = Object.freeze({ tags: [] });
var NoopAstroCache = /* @__PURE__ */ __name(class {
  enabled = false;
  set() {
  }
  get tags() {
    return [];
  }
  get options() {
    return EMPTY_OPTIONS;
  }
  async invalidate() {
  }
}, "NoopAstroCache");
var hasWarned = false;
var DisabledAstroCache = /* @__PURE__ */ __name(class {
  enabled = false;
  #logger;
  constructor(logger) {
    this.#logger = logger;
  }
  #warn() {
    if (!hasWarned) {
      hasWarned = true;
      this.#logger?.warn("cache", "`cache.set()` was called but caching is not enabled. Configure a cache provider in your Astro config under `cache` to enable caching.");
    }
  }
  set() {
    this.#warn();
  }
  get tags() {
    return [];
  }
  get options() {
    return EMPTY_OPTIONS;
  }
  async invalidate() {
    throw new AstroError(CacheNotEnabled);
  }
}, "DisabledAstroCache");
init_constants();
init_rewrite();
init_sequence();
init_base_pipeline();
init_constants();
var AstroMiddleware = /* @__PURE__ */ __name(class {
  #pipeline;
  constructor(pipeline) {
    this.#pipeline = pipeline;
  }
  async handle(state, renderRouteCallback) {
    state.pipeline.usedFeatures |= PipelineFeatures.middleware;
    const pipeline = this.#pipeline;
    await state.getProps();
    const apiContext = state.getAPIContext();
    state.counter++;
    if (state.counter === 4)
      return new Response("Loop Detected", {
        status: 508,
        statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
      });
    const next = /* @__PURE__ */ __name(async (ctx, payload) => {
      if (payload) {
        pipeline.logger.debug("router", "Called rewriting to:", payload);
        applyRewriteToState(state, payload, await pipeline.tryRewrite(payload, state.request));
      }
      return renderRouteCallback(state, ctx);
    }, "next");
    let response;
    if (state.skipMiddleware)
      response = await next(apiContext);
    else {
      const pipelineMiddleware = await pipeline.getMiddleware();
      response = await callMiddleware(sequence(...pipeline.internalMiddleware, pipelineMiddleware), apiContext, next);
    }
    response = this.#finalize(state, response);
    state.response = response;
    return response;
  }
  /**
  * Like `handle`, but mirrors the app-level error handling that
  * `AstroHandler` provides on the standard path, the same way
  * `PagesHandler.handleWithErrorFallback` does for `pages()`. When no
  * route matched it returns a 404 marked with `X-Astro-Error` for the
  * app's post-check; when Astro's own middleware chain throws it logs the
  * error and renders the custom `500.astro`.
  *
  * Errors surfaced through `renderRouteCallback` (the host framework's
  * `next`, e.g. host middleware mounted below `middleware()`) are
  * re-thrown instead, so the host's own error handling still runs rather
  * than being swallowed into Astro's 500 page. A sentinel tells the two
  * apart.
  *
  * Used by the composable `astro/fetch` `middleware()` entry point, where
  * there is no surrounding `AstroHandler` to supply this fallback.
  */
  async handleWithErrorFallback(app, state, renderRouteCallback) {
    if (!state.routeData)
      return new Response(null, {
        status: 404,
        headers: { [ASTRO_ERROR_HEADER]: "true" }
      });
    let nextError;
    try {
      return await this.handle(state, async (s2, ctx) => {
        try {
          return await renderRouteCallback(s2, ctx);
        } catch (err) {
          nextError = err;
          throw err;
        }
      });
    } catch (err) {
      if (err === nextError)
        throw err;
      app.logger.error(null, err.stack || err.message || String(err));
      return app.renderError(state.request, {
        ...state.renderOptions,
        status: 500,
        error: err,
        pathname: state.pathname
      });
    }
  }
  #finalize(state, response) {
    attachCookiesToResponse(response, state.cookies);
    return response;
  }
}, "AstroMiddleware");
init_endpoint$1();
init_server();
init_constants();
init_origin_check();
var EMPTY_SLOTS = Object.freeze({});
var PagesHandler = /* @__PURE__ */ __name(class {
  #pipeline;
  constructor(pipeline) {
    this.#pipeline = pipeline;
  }
  async handle(state, ctx) {
    const { logger, streaming } = this.#pipeline;
    state.resetResponseMetadata();
    let response;
    const componentInstance = await state.loadComponentInstance();
    switch (state.routeData.type) {
      case "endpoint":
        response = await renderEndpoint(componentInstance, ctx, state.routeData.prerender, logger, state);
        break;
      case "page": {
        const props = await state.getProps();
        const actionApiContext = state.getActionAPIContext();
        const result = await state.createResult(componentInstance, actionApiContext);
        try {
          response = await renderPage(result, componentInstance?.default, props, state.slots ?? EMPTY_SLOTS, streaming, state.routeData);
        } catch (e2) {
          result.cancelled = true;
          throw e2;
        }
        state.responseRouteType = "page";
        if (state.routeData.route === "/404" || state.routeData.route === "/500")
          state.skipErrorReroute = true;
        break;
      }
      case "redirect":
        return new Response(null, {
          status: 404,
          headers: { [ASTRO_ERROR_HEADER]: "true" }
        });
      case "fallback":
        state.responseRouteType = "fallback";
        return new Response(null, { status: 500 });
    }
    const responseCookies = getCookiesFromResponse(response);
    if (responseCookies)
      state.cookies.merge(responseCookies);
    state.response = response;
    return response;
  }
  /**
  * Like `handle`, but mirrors the app-level error handling that
  * `AstroHandler` provides on the standard path: unmatched routes
  * return a 404 marked with `X-Astro-Error` for the app's post-check
  * to render the 404 error page, and render-time errors are logged
  * and render the 500 error page instead of propagating to the host
  * framework.
  *
  * Used by the composable `astro/fetch` `pages()` entry point, where
  * there is no surrounding `AstroHandler` to supply this fallback.
  */
  async handleWithErrorFallback(app, state) {
    if (!state.routeData)
      return new Response(null, {
        status: 404,
        headers: { [ASTRO_ERROR_HEADER]: "true" }
      });
    const ctx = state.getAPIContext();
    if (this.#pipeline.manifest.checkOrigin && isForbiddenCrossOriginRequest(ctx.request, ctx.url, ctx.isPrerendered))
      return createCrossOriginForbiddenResponse(ctx.request);
    try {
      return await this.handle(state, ctx);
    } catch (err) {
      app.logger.error(null, err.stack || err.message || String(err));
      return app.renderError(state.request, {
        ...state.renderOptions,
        status: 500,
        error: err,
        pathname: state.pathname
      });
    }
  }
}, "PagesHandler");
init_path$1();
init_pathname();
function createNormalizedUrl(requestUrl) {
  return normalizeUrl(new URL(requestUrl));
}
__name(createNormalizedUrl, "createNormalizedUrl");
function normalizeUrl(url) {
  try {
    url.pathname = validateAndDecodePathname(url.pathname);
  } catch {
    try {
      url.pathname = decodeURI(url.pathname);
    } catch {
    }
  }
  url.pathname = collapseDuplicateSlashes(url.pathname);
  return url;
}
__name(normalizeUrl, "normalizeUrl");
init_errors_data();
init_errors$3();
init_render();
init_rewrite();
function applyRewriteToState(state, payload, { routeData, componentInstance, newUrl, pathname }, { mergeCookies = false } = {}) {
  const pipeline = state.pipeline;
  const oldPathname = state.pathname;
  const isI18nFallback = routeData.fallbackRoutes && routeData.fallbackRoutes.length > 0;
  if (pipeline.manifest.serverLike && !state.routeData.prerender && routeData.prerender && !isI18nFallback)
    throw new AstroError({
      ...ForbiddenRewrite,
      message: ForbiddenRewrite.message(state.pathname, pathname, routeData.component),
      hint: ForbiddenRewrite.hint(routeData.component)
    });
  state.routeData = routeData;
  state.componentInstance = componentInstance;
  if (payload instanceof Request)
    state.request = payload;
  else
    state.request = copyRequest(newUrl, state.request, routeData.prerender, pipeline.logger, state.routeData.route);
  state.url = createNormalizedUrl(state.request.url);
  if (mergeCookies) {
    const newCookies = new AstroCookies(state.request);
    if (state.cookies)
      newCookies.merge(state.cookies);
    state.cookies = newCookies;
  }
  state.params = getParams(routeData, pathname);
  state.pathname = pathname;
  state.isRewriting = true;
  state.status = 200;
  setOriginPathname(state.request, oldPathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
  state.invalidateContexts();
}
__name(applyRewriteToState, "applyRewriteToState");
var Rewrites = /* @__PURE__ */ __name(class {
  async execute(state, payload) {
    const pipeline = state.pipeline;
    pipeline.logger.debug("router", "Calling rewrite: ", payload);
    applyRewriteToState(state, payload, await pipeline.tryRewrite(payload, state.request), { mergeCookies: true });
    const middleware = new AstroMiddleware(pipeline);
    const pagesHandler = new PagesHandler(pipeline);
    return middleware.handle(state, pagesHandler.handle.bind(pagesHandler));
  }
}, "Rewrites");
init_endpoint();
init_route_errors();
function matchRoute(pathname, manifest2) {
  if (isRoute404(pathname)) {
    const errorRoute = manifest2.routes.find((route) => isRoute404(route.route));
    if (errorRoute)
      return errorRoute;
  }
  if (isRoute500(pathname)) {
    const errorRoute = manifest2.routes.find((route) => isRoute500(route.route));
    if (errorRoute)
      return errorRoute;
  }
  return manifest2.routes.find((route) => {
    return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
  });
}
__name(matchRoute, "matchRoute");
function isRoute404or500(route) {
  return isRoute404(route.route) || isRoute500(route.route);
}
__name(isRoute404or500, "isRoute404or500");
function isRouteServerIsland(route) {
  return route.component === SERVER_ISLAND_COMPONENT;
}
__name(isRouteServerIsland, "isRouteServerIsland");
var renderOptionsSymbol = /* @__PURE__ */ Symbol.for("astro.renderOptions");
function getRenderOptions(request) {
  return Reflect.get(request, renderOptionsSymbol);
}
__name(getRenderOptions, "getRenderOptions");
function setRenderOptions(request, options) {
  Reflect.set(request, renderOptionsSymbol, options);
}
__name(setRenderOptions, "setRenderOptions");
function getFirstForwardedValue(multiValueHeader) {
  return multiValueHeader?.toString().split(",").map((e2) => e2.trim())[0];
}
__name(getFirstForwardedValue, "getFirstForwardedValue");
function sanitizeHost(hostname) {
  if (!hostname)
    return void 0;
  if (/[/\\]/.test(hostname))
    return void 0;
  return hostname;
}
__name(sanitizeHost, "sanitizeHost");
function parseHost(host) {
  const parts = host.split(":");
  return {
    hostname: parts[0],
    port: parts[1]
  };
}
__name(parseHost, "parseHost");
function matchesAllowedDomains(hostname, protocol, port, allowedDomains) {
  const urlString = `${protocol}://${port ? `${hostname}:${port}` : hostname}`;
  if (!URL.canParse(urlString))
    return false;
  const testUrl = new URL(urlString);
  return allowedDomains.some((pattern) => matchPattern(testUrl, pattern));
}
__name(matchesAllowedDomains, "matchesAllowedDomains");
function validateHost(host, protocol, allowedDomains) {
  if (!host || host.length === 0)
    return void 0;
  if (!allowedDomains || allowedDomains.length === 0)
    return void 0;
  const sanitized = sanitizeHost(host);
  if (!sanitized)
    return void 0;
  const { hostname, port } = parseHost(sanitized);
  if (matchesAllowedDomains(hostname, protocol, port, allowedDomains))
    return sanitized;
}
__name(validateHost, "validateHost");
function validateForwardedHeaders(forwardedProtocol, forwardedHost, forwardedPort, allowedDomains) {
  const result = {};
  if (forwardedProtocol) {
    if (allowedDomains && allowedDomains.length > 0) {
      if (allowedDomains.some((pattern) => pattern.protocol !== void 0))
        try {
          const testUrl = new URL(`${forwardedProtocol}://example.com`);
          if (allowedDomains.some((pattern) => matchPattern(testUrl, { protocol: pattern.protocol })))
            result.protocol = forwardedProtocol;
        } catch {
        }
      else if (/^https?$/.test(forwardedProtocol))
        result.protocol = forwardedProtocol;
    }
  }
  if (forwardedPort && allowedDomains && allowedDomains.length > 0) {
    if (allowedDomains.some((pattern) => pattern.port !== void 0)) {
      if (allowedDomains.some((pattern) => pattern.port === forwardedPort))
        result.port = forwardedPort;
    }
  }
  if (forwardedHost && forwardedHost.length > 0 && allowedDomains && allowedDomains.length > 0) {
    const protoForValidation = result.protocol || "https";
    const sanitized = sanitizeHost(forwardedHost);
    if (sanitized) {
      const { hostname, port: portFromHost } = parseHost(sanitized);
      if (matchesAllowedDomains(hostname, protoForValidation, result.port || portFromHost, allowedDomains))
        result.host = sanitized;
    }
  }
  return result;
}
__name(validateForwardedHeaders, "validateForwardedHeaders");
init_dist$1();
init_path$1();
init_render();
init_constants();
init_runtime();
init_encryption();
init_errors$2();
init_pathname();
init_rewrite();
init_helpers();
var FetchState = /* @__PURE__ */ __name(class {
  pipeline;
  /**
  * The request to render. Mutated during rewrites so subsequent renders
  * see the rewritten URL.
  */
  request;
  routeData;
  /**
  * The pathname to use for routing and rendering. Starts out as the raw,
  * base-stripped, decoded pathname from the request. May be further
  * normalized by `AstroHandler` after routeData is known (in dev, when
  * the matched route has no `.html` extension, `.html` / `/index.html`
  * suffixes are stripped).
  */
  pathname;
  /** Resolved render options (addCookieHeader, clientAddress, locals, etc.). */
  renderOptions;
  /** When the request started, used to log duration. */
  timeStart;
  /**
  * The route's loaded component module. Set before middleware runs; may
  * be swapped during in-flight rewrites from inside the middleware chain.
  */
  componentInstance;
  /**
  * Slot overrides supplied by the container API. `undefined` for HTTP
  * requests — `PagesHandler` coalesces to `{}` on read so we don't
  * allocate an empty object per request.
  */
  slots;
  /**
  * The `Response` produced by handlers, if any. Set after page
  * rendering or middleware completes.
  */
  response;
  /**
  * Default HTTP status for the rendered response. Callers override
  * before rendering runs (e.g. `AstroHandler` sets this from
  * `BaseApp.getDefaultStatusCode`; error handlers set `404` / `500`).
  */
  status = 200;
  /** Whether user middleware should be skipped for this request. */
  skipMiddleware = false;
  /**
  * Set to `true` when the request path was encoded too many times to fully
  * decode (see {@link validateAndDecodePathname}). These requests are
  * rejected with a `400` before middleware or routing run.
  */
  invalidEncoding = false;
  /** A flag that tells the render content if the rewriting was triggered. */
  isRewriting = false;
  /** A safety net in case of loops (rewrite counter). */
  counter = 0;
  /** Cookies for this request. Created lazily on first access. */
  cookies;
  /** Route params derived from routeData + pathname. Computed lazily. */
  #params;
  get params() {
    if (!this.#params && this.routeData)
      this.#params = getParams(this.routeData, this.pathname);
    return this.#params;
  }
  set params(value) {
    this.#params = value;
  }
  /** Normalized URL for this request. */
  url;
  /** Client address for this request. */
  clientAddress;
  /** Whether this is a partial render (container API). */
  partial;
  /** Internal metadata about the current response route type. */
  responseRouteType;
  /** Internal flag to prevent rerouting this response to an error page. */
  skipErrorReroute = false;
  /** Whether to inject CSP meta tags. */
  shouldInjectCspMetaTags;
  /** Request-scoped locals object, shared with user middleware. */
  locals = {};
  /**
  * Memoized `props` (see `getProps`). `null` means "not yet computed"
  * — using `null` (rather than `undefined`) keeps the hidden class
  * stable and distinct from a valid-but-empty result.
  */
  props = null;
  /** Memoized `ActionAPIContext` (see `getActionAPIContext`). */
  actionApiContext = null;
  /** Memoized `APIContext` (see `getAPIContext`). */
  apiContext = null;
  /** Registered context providers keyed by name. Lazy-initialized on first provide(). */
  #providers;
  /** Cached values from resolved providers. Lazy-initialized on first resolve(). */
  #providersResolvedValues;
  /** Cached promise for lazy component instance loading. */
  #componentInstancePromise;
  /** SSR result for the current page render. */
  result;
  /** Initial props (from container/error handler). */
  initialProps = {};
  /** Rewrites handler instance. Lazy-initialized on first rewrite(). */
  #rewrites;
  /** Memoized Astro page partial. */
  #astroPagePartial;
  /**
  * Locale-prefixed pathname derived from the Host header for domain-based
  * i18n routing (e.g. `/en/boats/1/foo`), or `undefined` when the request
  * isn't served from a locale-mapped domain. When set, `this.pathname` is
  * derived from it so locale/param resolution match the route pattern.
  */
  #domainPathname;
  /** Memoized current locale. */
  #currentLocale;
  /** Memoized preferred locale. */
  #preferredLocale;
  /** Memoized preferred locale list. */
  #preferredLocaleList;
  constructor(pipeline, request, options) {
    this.pipeline = pipeline;
    this.request = request;
    options ??= getRenderOptions(request);
    this.routeData = options?.routeData;
    const self = this;
    this.renderOptions = {
      ...options ?? {
        addCookieHeader: false,
        clientAddress: void 0,
        prerenderedErrorPageFetch: fetch,
        routeData: void 0,
        waitUntil: void 0
      },
      get locals() {
        return self.locals;
      }
    };
    this.componentInstance = void 0;
    this.slots = void 0;
    const url = new URL(request.url);
    const publicPathname = this.#normalizePathname(url.pathname);
    const pathname = this.#computePathname(publicPathname);
    url.pathname = publicPathname;
    url.pathname = collapseDuplicateSlashes(url.pathname);
    const domainPathname = computePathnameFromDomain(request, url, pipeline.manifest.i18n, pipeline.manifest.base, pipeline.manifest.trailingSlash, pipeline.logger, pathname);
    if (domainPathname) {
      this.#domainPathname = domainPathname;
      this.pathname = domainPathname;
    } else
      this.pathname = pathname;
    this.timeStart = performance.now();
    this.clientAddress = options?.clientAddress;
    this.locals = options?.locals ?? {};
    this.url = url;
    this.cookies = new AstroCookies(request);
    if (pipeline.manifest.allowedDomains && pipeline.manifest.allowedDomains.length > 0 && !this.routeData?.prerender)
      this.#applyForwardedHeaders();
    if (!Reflect.get(this.request, originPathnameSymbol))
      setOriginPathname(this.request, this.pathname, pipeline.manifest.trailingSlash, pipeline.manifest.buildFormat);
    this.#resolveRouteData();
  }
  /**
  * Triggers a rewrite. Delegates to the Rewrites handler.
  */
  rewrite(payload) {
    return (this.#rewrites ??= new Rewrites()).execute(this, payload);
  }
  /**
  * Creates the SSR result for the current page render.
  */
  async createResult(mod, ctx) {
    const pipeline = this.pipeline;
    const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest2, renderers: renderers2, resolve } = pipeline;
    const routeData = this.routeData;
    const { links, scripts, styles } = await pipeline.headElements(routeData);
    const extraStyleHashes = [];
    const extraScriptHashes = [];
    const shouldInjectCspMetaTags = this.shouldInjectCspMetaTags ?? manifest2.shouldInjectCspMetaTags;
    const cspAlgorithm = manifest2.csp?.algorithm ?? "SHA-256";
    if (shouldInjectCspMetaTags) {
      for (const style of styles)
        extraStyleHashes.push(await generateCspDigest(style.children, cspAlgorithm));
      for (const script of scripts)
        extraScriptHashes.push(await generateCspDigest(script.children, cspAlgorithm));
    }
    const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest2.componentMetadata;
    const headers = new Headers({ "Content-Type": "text/html" });
    const partial2 = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
    const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
    const status = this.status;
    const response = {
      status: actionResult?.error ? actionResult?.error.status : status,
      statusText: actionResult?.error ? actionResult?.error.type : "OK",
      get headers() {
        return headers;
      },
      set headers(_) {
        throw new AstroError(AstroResponseHeadersReassigned);
      }
    };
    const state = this;
    const result = {
      base: manifest2.base,
      userAssetsBase: manifest2.userAssetsBase,
      cancelled: false,
      clientDirectives,
      inlinedScripts,
      componentMetadata,
      compressHTML,
      cookies: this.cookies,
      createAstro: (props, slots) => state.createAstro(result, props, slots, ctx),
      links,
      params: this.params,
      partial: partial2,
      pathname: this.pathname,
      renderers: renderers2,
      resolve,
      response,
      request: this.request,
      scripts,
      styles,
      actionResult,
      async getServerIslandNameMap() {
        return (await pipeline.getServerIslands()).serverIslandNameMap ?? /* @__PURE__ */ new Map();
      },
      key: manifest2.key,
      trailingSlash: manifest2.trailingSlash,
      _metadata: {
        hasHydrationScript: false,
        rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
        hasRenderedHead: false,
        renderedScripts: /* @__PURE__ */ new Set(),
        hasDirectives: /* @__PURE__ */ new Set(),
        hasRenderedServerIslandRuntime: false,
        headInTree: false,
        extraHead: [],
        extraStyleHashes,
        extraScriptHashes,
        propagators: /* @__PURE__ */ new Set(),
        routeHasPropagation: false,
        pendingSlotEvaluations: [],
        templateDepth: 0
      },
      cspDestination: manifest2.csp?.cspDestination ?? (routeData.prerender ? "meta" : "header"),
      shouldInjectCspMetaTags,
      cspAlgorithm,
      directives: manifest2.csp?.directives ? [...manifest2.csp.directives] : [],
      scriptHashes: manifest2.csp?.scriptHashes ? [...manifest2.csp.scriptHashes] : [],
      scriptResources: manifest2.csp?.scriptResources ? [...manifest2.csp.scriptResources] : [],
      styleHashes: manifest2.csp?.styleHashes ? [...manifest2.csp.styleHashes] : [],
      styleResources: manifest2.csp?.styleResources ? [...manifest2.csp.styleResources] : [],
      isStrictDynamic: manifest2.csp?.isStrictDynamic ?? false,
      scriptDirective: {
        resources: manifest2.csp?.scriptDirective ? [...manifest2.csp.scriptDirective.resources] : [],
        hashes: manifest2.csp?.scriptDirective ? [...manifest2.csp.scriptDirective.hashes] : [],
        strictDynamic: manifest2.csp?.scriptDirective?.strictDynamic ?? false
      },
      styleDirective: {
        resources: manifest2.csp?.styleDirective ? [...manifest2.csp.styleDirective.resources] : [],
        hashes: manifest2.csp?.styleDirective ? [...manifest2.csp.styleDirective.hashes] : []
      },
      internalFetchHeaders: manifest2.internalFetchHeaders
    };
    this.result = result;
    return result;
  }
  /**
  * Creates the Astro global object for a component render.
  */
  createAstro(result, props, slotValues, apiContext) {
    let astroPagePartial;
    if (this.isRewriting)
      this.#astroPagePartial = this.createAstroPagePartial(result, apiContext);
    this.#astroPagePartial ??= this.createAstroPagePartial(result, apiContext);
    astroPagePartial = this.#astroPagePartial;
    const astroComponentPartial = {
      props,
      self: null
    };
    const Astro = Object.assign(Object.create(astroPagePartial), astroComponentPartial);
    let _slots;
    Object.defineProperty(Astro, "slots", { get: () => {
      if (!_slots)
        _slots = new Slots(result, slotValues, this.pipeline.logger);
      return _slots;
    } });
    return Astro;
  }
  /**
  * Creates the Astro page-level partial (prototype for Astro global).
  */
  createAstroPagePartial(result, apiContext) {
    const state = this;
    const { cookies, locals, params, pipeline, url } = this;
    const { response } = result;
    const redirect = /* @__PURE__ */ __name((path, status = 302) => {
      if (state.request[responseSentSymbol$1])
        throw new AstroError({ ...ResponseSentError });
      return new Response(null, {
        status,
        headers: { Location: path }
      });
    }, "redirect");
    const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
      return await state.rewrite(reroutePayload);
    }, "rewrite");
    const callAction = createCallAction(apiContext);
    const partial2 = {
      generator: ASTRO_GENERATOR,
      routePattern: this.routeData.route,
      isPrerendered: this.routeData.prerender,
      cookies,
      get clientAddress() {
        return state.getClientAddress();
      },
      get currentLocale() {
        return state.computeCurrentLocale();
      },
      params,
      get preferredLocale() {
        return state.computePreferredLocale();
      },
      get preferredLocaleList() {
        return state.computePreferredLocaleList();
      },
      locals,
      redirect,
      rewrite,
      request: this.request,
      response,
      site: pipeline.site,
      getActionResult: createGetActionResult(locals),
      get callAction() {
        return callAction;
      },
      url,
      get originPathname() {
        return getOriginPathname(state.request);
      },
      get csp() {
        return state.getCsp();
      },
      get logger() {
        return {
          info(msg) {
            pipeline.logger.info(null, msg);
          },
          warn(msg) {
            pipeline.logger.warn(null, msg);
          },
          error(msg) {
            pipeline.logger.error(null, msg);
          }
        };
      }
    };
    this.defineProviderGetters(partial2);
    return partial2;
  }
  getClientAddress() {
    const { pipeline, clientAddress } = this;
    const routeData = this.routeData;
    if (routeData.prerender)
      throw new AstroError({
        ...PrerenderClientAddressNotAvailable,
        message: PrerenderClientAddressNotAvailable.message(routeData.component)
      });
    if (clientAddress)
      return clientAddress;
    if (pipeline.adapterName)
      throw new AstroError({
        ...ClientAddressNotAvailable,
        message: ClientAddressNotAvailable.message(pipeline.adapterName)
      });
    throw new AstroError(StaticClientAddressNotAvailable);
  }
  getCookies() {
    return this.cookies;
  }
  getCsp() {
    const state = this;
    const { pipeline } = this;
    if (!pipeline.manifest.csp) {
      if (pipeline.runtimeMode === "production")
        pipeline.logger.warn("csp", `context.csp was used when rendering the route ${s.green(state.routeData.route)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/configuration-reference/#securitycsp`);
      return;
    }
    const warnedFallback = /* @__PURE__ */ new Set();
    const warnFallback = /* @__PURE__ */ __name((family, kind) => {
      if (kind === "default" || !state.result)
        return;
      const defaultResources = (family === "script" ? state.result.scriptDirective : state.result.styleDirective).resources.map(normalizeCspResourceEntry).filter((entry) => entry.kind === "default").map((entry) => entry.resource);
      if (defaultResources.length === 0)
        return;
      const key = `${family}:${kind}`;
      if (warnedFallback.has(key))
        return;
      warnedFallback.add(key);
      const general = `${family}-src`;
      const specific = `${general}-${kind === "element" ? "elem" : "attr"}`;
      pipeline.logger.warn("csp", `A resource was added to \`${specific}\`, but \`${general}\` also defines custom resources (${defaultResources.join(" ")}). Because \`${specific}\` overrides \`${general}\` for its scope (browsers do not fall back), those resources will not apply there. Add them to \`${specific}\` as well if needed.`);
    }, "warnFallback");
    return {
      insertDirective(payload) {
        if (state.result)
          state.result.directives = pushDirective(state.result.directives, payload);
      },
      insertScriptResource(payload) {
        if (!state.result)
          return;
        warnFallback("script", normalizeCspResourceEntry(payload).kind);
        state.result.scriptDirective.resources.push(payload);
      },
      insertStyleResource(payload) {
        if (!state.result)
          return;
        warnFallback("style", normalizeCspResourceEntry(payload).kind);
        state.result.styleDirective.resources.push(payload);
      },
      insertStyleHash(payload) {
        state.result?.styleDirective.hashes.push(payload);
      },
      insertScriptHash(payload) {
        state.result?.scriptDirective.hashes.push(payload);
      }
    };
  }
  computeCurrentLocale() {
    const { url, pipeline: { i18n }, routeData } = this;
    if (!i18n || !routeData)
      return;
    const { defaultLocale, locales, strategy } = i18n;
    const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
    if (this.#currentLocale)
      return this.#currentLocale;
    let computedLocale;
    if (isRouteServerIsland(routeData)) {
      let referer = this.request.headers.get("referer");
      if (referer) {
        if (URL.canParse(referer))
          referer = new URL(referer).pathname;
        computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
      }
    } else {
      let pathname = routeData.pathname;
      if (this.#domainPathname)
        pathname = this.pathname;
      else if (url && !routeData.pattern.test(url.pathname)) {
        for (const fallbackRoute of routeData.fallbackRoutes)
          if (fallbackRoute.pattern.test(url.pathname)) {
            pathname = fallbackRoute.pathname;
            break;
          }
      }
      pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname ?? this.pathname;
      computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
      if (routeData.params.length > 0) {
        const localeFromParams = computeCurrentLocaleFromParams(this.params, locales);
        if (localeFromParams)
          computedLocale = localeFromParams;
      }
    }
    this.#currentLocale = computedLocale ?? fallbackTo;
    return this.#currentLocale;
  }
  computePreferredLocale() {
    const { pipeline: { i18n }, request } = this;
    if (!i18n)
      return;
    return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
  }
  computePreferredLocaleList() {
    const { pipeline: { i18n }, request } = this;
    if (!i18n)
      return;
    return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
  }
  /**
  * Lazily loads the route's component module. Returns the cached
  * instance if already loaded. The promise is cached so concurrent
  * callers share the same load.
  */
  async loadComponentInstance() {
    if (this.componentInstance)
      return this.componentInstance;
    if (this.#componentInstancePromise)
      return this.#componentInstancePromise;
    this.#componentInstancePromise = this.pipeline.getComponentByRoute(this.routeData).then((mod) => {
      this.componentInstance = mod;
      return mod;
    });
    return this.#componentInstancePromise;
  }
  /**
  * Registers a context provider under the given key. Handlers call
  * this to contribute values to the request context (e.g. sessions).
  * The `create` factory is called lazily on the first `resolve(key)`.
  */
  provide(key, provider) {
    (this.#providers ??= /* @__PURE__ */ new Map()).set(key, provider);
  }
  /**
  * Lazily resolves a provider registered under `key`. Calls
  * `provider.create()` on first access and caches the result.
  * Returns `undefined` if no provider was registered for the key.
  */
  resolve(key) {
    if (this.#providersResolvedValues?.has(key))
      return this.#providersResolvedValues.get(key);
    const provider = this.#providers?.get(key);
    if (!provider)
      return void 0;
    const value = provider.create();
    (this.#providersResolvedValues ??= /* @__PURE__ */ new Map()).set(key, value);
    return value;
  }
  /**
  * Runs all registered `finalize` callbacks. Should be called after
  * the response is produced, typically in a `finally` block.
  *
  * Returns synchronously (no promise allocation) when nothing needs
  * finalizing — important for the hot path where sessions are not used.
  */
  finalizeAll() {
    if (!this.#providersResolvedValues || this.#providersResolvedValues.size === 0)
      return;
    let chain;
    for (const [key, provider] of this.#providers)
      if (provider.finalize && this.#providersResolvedValues.has(key)) {
        const result = provider.finalize(this.#providersResolvedValues.get(key));
        if (result)
          chain = chain ? chain.then(() => result) : result;
      }
    return chain;
  }
  /**
  * Adds lazy getters to `target` for each registered provider key.
  * Used by context creation (APIContext, Astro global) so that
  * provider values like `session` and `cache` appear as properties
  * without hard-coding the keys.
  *
  * Always defines a `session` getter (returning `undefined` when no
  * provider is registered) so `ctx.session` / `Astro.session` is a
  * present property regardless of whether the sessions handler was
  * included in the pipeline.
  */
  defineProviderGetters(target) {
    const state = this;
    if (this.#providers)
      for (const key of this.#providers.keys())
        Object.defineProperty(target, key, {
          get: () => state.resolve(key),
          enumerable: true,
          configurable: true
        });
    if (!this.#providers?.has("session")) {
      let warned = false;
      Object.defineProperty(target, "session", {
        get() {
          if (!warned) {
            warned = true;
            state.pipeline.logger.warn("session", "`Astro.session` was accessed but no session storage is configured. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/");
          }
        },
        enumerable: true,
        configurable: true
      });
    }
  }
  /**
  * Resolves the route to use for this request and stores it on
  * `this.routeData`. If the adapter (or the dev server) provided a
  * `routeData` via render options it's already set and this is a
  * no-op. Otherwise we use the app's synchronous route matcher and
  * fall back to a `404.astro` route so middleware can still run.
  *
  * Called eagerly from the constructor so individual handlers
  * (actions, pages, middleware, etc.) always see a resolved route
  * without the caller needing an extra setup step.
  *
  * Once routeData is known, finalizes `this.pathname`: in dev, if the
  * matched route has no `.html` extension, strip `.html` / `/index.html`
  * suffixes so the rendering pipeline sees the canonical pathname.
  */
  /**
  * Strip `.html` / `/index.html` suffixes from the pathname so the
  * rendering pipeline sees the canonical route path. Only applies to
  * page routes where `.html` is framework-injected. Endpoint routes
  * preserve `.html` because any such suffix is user-provided (e.g.
  * from `getStaticPaths` params). Skipped when the matched route
  * itself has an `.html` extension in its definition.
  */
  #stripHtmlExtension() {
    if (this.routeData && this.routeData.type === "page" && !routeHasHtmlExtension(this.routeData))
      this.pathname = this.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  }
  #resolveRouteData() {
    const pipeline = this.pipeline;
    if (this.routeData) {
      this.#stripHtmlExtension();
      return;
    }
    const matched = pipeline.matchRoute(this.pathname);
    if (matched && matched.prerender && pipeline.manifest.serverLike)
      if (matched.params.length > 0) {
        const allMatches = pipeline.matchAllRoutes(this.pathname);
        this.routeData = allMatches.find((r2) => !r2.prerender);
      } else
        this.routeData = void 0;
    else
      this.routeData = matched;
    pipeline.logger.debug("router", "Astro matched the following route for " + this.request.url);
    pipeline.logger.debug("router", "RouteData:\n" + this.routeData);
    if (!this.routeData) {
      const custom404 = getCustom404Route(pipeline.manifestData);
      if (custom404 && !custom404.prerender)
        this.routeData = custom404;
    }
    if (!this.routeData) {
      pipeline.logger.debug("router", "Astro hasn't found routes that match " + this.request.url);
      pipeline.logger.debug("router", "Here's the available routes:\n", pipeline.manifestData);
      return;
    }
    this.#stripHtmlExtension();
  }
  /**
  * Strips the pipeline's base from a normalized request pathname and prepends
  * a forward slash.
  *
  * Mirrors `BaseApp.removeBase`, including the
  * `collapseDuplicateLeadingSlashes` fix that prevents middleware
  * authorization bypass when the URL starts with `//`.
  */
  #computePathname(normalizedPathname) {
    let pathname = collapseDuplicateLeadingSlashes(normalizedPathname);
    const base = this.pipeline.manifest.base;
    if (pathname.startsWith(base)) {
      const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
      pathname = pathname.slice(baseWithoutTrailingSlash.length + 1);
    }
    return prependForwardSlash(pathname);
  }
  /**
  * Decodes and normalizes the public request pathname before deriving the
  * separate pathname used for route matching.
  */
  #normalizePathname(pathname) {
    try {
      pathname = validateAndDecodePathname(pathname);
    } catch (e2) {
      if (e2 instanceof MultiLevelEncodingError)
        this.invalidEncoding = true;
      else
        this.pipeline.logger.error(null, e2.toString());
    }
    return collapseDuplicateSlashes(pathname);
  }
  /**
  * Reads X-Forwarded-Proto, X-Forwarded-Host, and X-Forwarded-Port
  * from the request headers, validates them against the manifest's
  * `allowedDomains`, and updates `this.url` accordingly. Also resolves
  * `clientAddress` from X-Forwarded-For when the host is trusted.
  *
  * Only called when `allowedDomains` is configured — without it,
  * forwarded headers are never trusted.
  */
  #applyForwardedHeaders() {
    const headers = this.request.headers;
    const allowedDomains = this.pipeline.manifest.allowedDomains;
    const validated = validateForwardedHeaders(getFirstForwardedValue(headers.get("x-forwarded-proto") ?? void 0), getFirstForwardedValue(headers.get("x-forwarded-host") ?? void 0), getFirstForwardedValue(headers.get("x-forwarded-port") ?? void 0), allowedDomains);
    if (!validated.protocol && !validated.host && !validated.port)
      return;
    if (validated.protocol)
      this.url.protocol = validated.protocol + ":";
    if (validated.host) {
      const colonIdx = validated.host.indexOf(":");
      if (colonIdx !== -1) {
        this.url.hostname = validated.host.slice(0, colonIdx);
        this.url.port = validated.host.slice(colonIdx + 1);
      } else {
        this.url.hostname = validated.host;
        this.url.port = "";
      }
    }
    if (validated.port)
      this.url.port = validated.port;
    if (validated.host !== void 0 && !this.clientAddress) {
      const forwardedFor = getFirstForwardedValue(this.request.headers.get("x-forwarded-for") ?? void 0);
      if (forwardedFor)
        this.clientAddress = forwardedFor;
    }
    const oldRequest = this.request;
    this.request = new Request(this.url, oldRequest);
    const app = Reflect.get(oldRequest, appSymbol);
    if (app !== void 0)
      Reflect.set(this.request, appSymbol, app);
  }
  /**
  * Returns the resolved `props` for this render, computing them lazily
  * from the route + component module on first access. If the
  * `initialProps` already carries user-supplied props (e.g. the
  * container API) those are used verbatim.
  */
  async getProps() {
    if (this.props !== null)
      return this.props;
    if (Object.keys(this.initialProps).length > 0) {
      this.props = this.initialProps;
      return this.props;
    }
    const pipeline = this.pipeline;
    const mod = await this.loadComponentInstance();
    this.props = await getProps({
      mod,
      routeData: this.routeData,
      routeCache: pipeline.routeCache,
      pathname: this.pathname,
      logger: pipeline.logger,
      serverLike: pipeline.manifest.serverLike,
      base: pipeline.manifest.base,
      trailingSlash: pipeline.manifest.trailingSlash
    });
    return this.props;
  }
  /**
  * Returns the `ActionAPIContext` for this render, creating it lazily.
  * Used by middleware, actions, and page dispatch.
  */
  getActionAPIContext() {
    if (this.actionApiContext !== null)
      return this.actionApiContext;
    const state = this;
    const ctx = {
      get cookies() {
        return state.cookies;
      },
      routePattern: this.routeData.route,
      isPrerendered: this.routeData.prerender,
      get clientAddress() {
        return state.getClientAddress();
      },
      get currentLocale() {
        return state.computeCurrentLocale();
      },
      generator: ASTRO_GENERATOR,
      get locals() {
        return state.locals;
      },
      set locals(_) {
        throw new AstroError(LocalsReassigned);
      },
      params: this.params,
      get preferredLocale() {
        return state.computePreferredLocale();
      },
      get preferredLocaleList() {
        return state.computePreferredLocaleList();
      },
      request: this.request,
      site: this.pipeline.site,
      url: this.url,
      get originPathname() {
        return getOriginPathname(state.request);
      },
      get csp() {
        return state.getCsp();
      },
      get logger() {
        return {
          info(msg) {
            state.pipeline.logger.info(null, msg);
          },
          warn(msg) {
            state.pipeline.logger.warn(null, msg);
          },
          error(msg) {
            state.pipeline.logger.error(null, msg);
          }
        };
      }
    };
    this.defineProviderGetters(ctx);
    this.actionApiContext = ctx;
    return this.actionApiContext;
  }
  /**
  * Returns the `APIContext` for this render, creating it lazily from
  * the memoized props + action context.
  *
  * Callers must ensure `getProps()` has resolved at least once before
  * calling this.
  */
  getAPIContext() {
    if (this.apiContext !== null)
      return this.apiContext;
    const actionApiContext = this.getActionAPIContext();
    const state = this;
    const redirect = /* @__PURE__ */ __name((path, status = 302) => new Response(null, {
      status,
      headers: { Location: path }
    }), "redirect");
    const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
      return await state.rewrite(reroutePayload);
    }, "rewrite");
    Reflect.set(actionApiContext, pipelineSymbol, this.pipeline);
    actionApiContext[fetchStateSymbol] = this;
    this.apiContext = Object.assign(actionApiContext, {
      props: this.props,
      redirect,
      rewrite,
      getActionResult: createGetActionResult(actionApiContext.locals),
      callAction: createCallAction(actionApiContext)
    });
    return this.apiContext;
  }
  /**
  * Invalidates the cached `APIContext` so the next `getAPIContext()`
  * call re-derives it from the (possibly mutated) state. Used
  * after an in-flight rewrite swaps the route / request / params.
  */
  invalidateContexts() {
    this.props = null;
    this.actionApiContext = null;
    this.apiContext = null;
  }
  resetResponseMetadata() {
    this.responseRouteType = void 0;
    this.skipErrorReroute = false;
  }
}, "FetchState");
init_origin_check();
init_base_pipeline();
var ActionHandler = /* @__PURE__ */ __name(class {
  /**
  * Run action handling for the current request. Expects the APIContext
  * that is already being used by the render pipeline.
  *
  * Returns a `Response` when the action fully handles the request (RPC),
  * or `undefined` when the caller should continue processing the
  * request (form actions or non-action requests).
  */
  handle(apiContext, state) {
    state.pipeline.usedFeatures |= PipelineFeatures.actions;
    if (apiContext.isPrerendered)
      return;
    const { action, setActionResult } = getActionContext(apiContext);
    if (!action)
      return;
    if (state.pipeline.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered))
      return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
    return this.#executeAction(action, setActionResult);
  }
  async #executeAction(action, setActionResult) {
    const serialized = serializeActionResult(await action.handler());
    if (action.calledFrom === "rpc") {
      if (serialized.type === "empty")
        return new Response(null, { status: serialized.status });
      return new Response(serialized.body, {
        status: serialized.status,
        headers: { "Content-Type": serialized.contentType }
      });
    }
    setActionResult(action.name, serialized);
  }
}, "ActionHandler");
init_constants();
function prepareResponse(response, { addCookieHeader }) {
  if (addCookieHeader)
    for (const setCookieHeaderValue of getSetCookiesFromResponse(response))
      response.headers.append("set-cookie", setCookieHeaderValue);
  Reflect.set(response, responseSentSymbol$1, true);
}
__name(prepareResponse, "prepareResponse");
init_esm();
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
  const delay = status === 302 ? 2 : 0;
  const rel = escape(String(relativeLocation));
  return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
__name(redirectTemplate, "redirectTemplate");
init_path$1();
var TrailingSlashHandler = /* @__PURE__ */ __name(class {
  #app;
  constructor(app) {
    this.#app = app;
  }
  /**
  * Returns a redirect `Response` if the request pathname needs
  * normalization, or `undefined` if no redirect is required.
  */
  handle(state) {
    const url = new URL(state.request.url);
    const redirect = this.#redirectTrailingSlash(url.pathname);
    if (redirect === url.pathname)
      return;
    const addCookieHeader = state.renderOptions.addCookieHeader;
    const status = state.request.method === "GET" ? 301 : 308;
    const response = new Response(redirectTemplate({
      status,
      relativeLocation: url.pathname,
      absoluteLocation: redirect,
      from: state.request.url
    }), {
      status,
      headers: { location: redirect + url.search }
    });
    prepareResponse(response, { addCookieHeader });
    return response;
  }
  #redirectTrailingSlash(pathname) {
    const { trailingSlash } = this.#app.manifest;
    if (pathname === "/" || isInternalPath(pathname))
      return pathname;
    const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
    if (path !== pathname)
      return path;
    if (trailingSlash === "ignore")
      return pathname;
    if (trailingSlash === "always" && !hasFileExtension(pathname))
      return appendForwardSlash(pathname);
    if (trailingSlash === "never")
      return removeTrailingForwardSlash(pathname);
    return pathname;
  }
}, "TrailingSlashHandler");
function defaultSetHeaders(options) {
  const headers = new Headers();
  const directives = [];
  if (options.maxAge !== void 0)
    directives.push(`max-age=${options.maxAge}`);
  if (options.swr !== void 0)
    directives.push(`stale-while-revalidate=${options.swr}`);
  if (directives.length > 0)
    headers.set("CDN-Cache-Control", directives.join(", "));
  if (options.tags && options.tags.length > 0)
    headers.set("Cache-Tag", options.tags.join(", "));
  if (options.lastModified)
    headers.set("Last-Modified", options.lastModified.toUTCString());
  if (options.etag)
    headers.set("ETag", options.etag);
  return headers;
}
__name(defaultSetHeaders, "defaultSetHeaders");
function isLiveDataEntry(value) {
  return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
__name(isLiveDataEntry, "isLiveDataEntry");
init_errors$3();
init_errors_data();
var APPLY_HEADERS = /* @__PURE__ */ Symbol.for("astro:cache:apply");
var IS_ACTIVE = /* @__PURE__ */ Symbol.for("astro:cache:active");
var AstroCache = /* @__PURE__ */ __name(class {
  #options = {};
  #tags = /* @__PURE__ */ new Set();
  #disabled = false;
  #provider;
  enabled = true;
  constructor(provider) {
    this.#provider = provider;
  }
  set(input) {
    if (input === false) {
      this.#disabled = true;
      this.#tags.clear();
      this.#options = {};
      return;
    }
    this.#disabled = false;
    let options;
    if (isLiveDataEntry(input)) {
      if (!input.cacheHint)
        return;
      options = input.cacheHint;
    } else
      options = input;
    if ("maxAge" in options && options.maxAge !== void 0)
      this.#options.maxAge = options.maxAge;
    if ("swr" in options && options.swr !== void 0)
      this.#options.swr = options.swr;
    if ("etag" in options && options.etag !== void 0)
      this.#options.etag = options.etag;
    if (options.lastModified !== void 0) {
      if (!this.#options.lastModified || options.lastModified > this.#options.lastModified)
        this.#options.lastModified = options.lastModified;
    }
    if (options.tags)
      for (const tag of options.tags)
        this.#tags.add(tag);
  }
  get tags() {
    return [...this.#tags];
  }
  /**
  * Get the current cache options (read-only snapshot).
  * Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
  */
  get options() {
    return {
      ...this.#options,
      tags: this.tags
    };
  }
  async invalidate(input) {
    if (!this.#provider)
      throw new AstroError(CacheNotEnabled);
    let options;
    if (isLiveDataEntry(input))
      options = { tags: input.cacheHint?.tags ?? [] };
    else
      options = input;
    return this.#provider.invalidate(options);
  }
  /** @internal */
  [APPLY_HEADERS](response, request) {
    if (this.#disabled)
      return;
    const finalOptions = {
      ...this.#options,
      tags: this.tags
    };
    if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length)
      return;
    const headers = this.#provider?.setHeaders?.(finalOptions, request) ?? defaultSetHeaders(finalOptions);
    for (const [key, value] of headers)
      response.headers.set(key, value);
  }
  /** @internal */
  get [IS_ACTIVE]() {
    return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
  }
}, "AstroCache");
function applyCacheHeaders(cache, response, request) {
  if (APPLY_HEADERS in cache)
    cache[APPLY_HEADERS](response, request);
}
__name(applyCacheHeaders, "applyCacheHeaders");
var ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
var ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
  const result = [];
  part.split(ROUTE_DYNAMIC_SPLIT).map((str, i2) => {
    if (!str)
      return;
    const dynamic = i2 % 2 === 1;
    const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
    if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content))
      throw new Error(`Invalid route ${file} \u2014 parameter name must match /^[a-zA-Z0-9_$]+$/`);
    result.push({
      content,
      dynamic,
      spread: dynamic && ROUTE_SPREAD.test(content)
    });
  });
  return result;
}
__name(getParts, "getParts");
init_path$1();
init_pattern();
init_priority();
function compileCacheRoutes(routes, base, trailingSlash) {
  const compiled = Object.entries(routes).map(([path, options]) => {
    const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s2) => getParts(s2, path));
    return {
      pattern: getPattern(segments, base, trailingSlash),
      options,
      segments,
      route: path
    };
  });
  compiled.sort((a2, b) => routeComparator({
    segments: a2.segments,
    route: a2.route,
    type: "page"
  }, {
    segments: b.segments,
    route: b.route,
    type: "page"
  }));
  return compiled;
}
__name(compileCacheRoutes, "compileCacheRoutes");
function matchCacheRoute(pathname, compiledRoutes) {
  for (const route of compiledRoutes)
    if (route.pattern.test(pathname))
      return route.options;
  return null;
}
__name(matchCacheRoute, "matchCacheRoute");
init_base_pipeline();
var CACHE_KEY = "cache";
function provideCache(state) {
  const pipeline = state.pipeline;
  if (!pipeline.cacheConfig) {
    state.provide(CACHE_KEY, { create: () => new DisabledAstroCache(pipeline.logger) });
    return;
  }
  if (pipeline.runtimeMode === "development") {
    state.provide(CACHE_KEY, { create: () => new NoopAstroCache() });
    return;
  }
  return provideCacheAsync(state, pipeline);
}
__name(provideCache, "provideCache");
async function provideCacheAsync(state, pipeline) {
  const cacheProvider = await pipeline.getCacheProvider();
  state.provide(CACHE_KEY, { create() {
    const cache = new AstroCache(cacheProvider);
    if (pipeline.cacheConfig?.routes) {
      if (!pipeline.compiledCacheRoutes)
        pipeline.compiledCacheRoutes = compileCacheRoutes(pipeline.cacheConfig.routes, pipeline.manifest.base, pipeline.manifest.trailingSlash);
      const matched = matchCacheRoute(state.pathname, pipeline.compiledCacheRoutes);
      if (matched)
        cache.set(matched);
    }
    return cache;
  } });
}
__name(provideCacheAsync, "provideCacheAsync");
var CacheHandler = /* @__PURE__ */ __name(class {
  #app;
  constructor(app) {
    this.#app = app;
  }
  async handle(state, next) {
    this.#app.pipeline.usedFeatures |= PipelineFeatures.cache;
    if (!this.#app.pipeline.cacheProvider)
      return next();
    const cache = state.resolve(CACHE_KEY);
    const cacheProvider = await this.#app.pipeline.getCacheProvider();
    if (cacheProvider?.onRequest) {
      const response2 = await cacheProvider.onRequest({
        request: state.request,
        url: new URL(state.request.url),
        waitUntil: state.renderOptions.waitUntil
      }, async () => {
        const res = await next();
        applyCacheHeaders(cache, res, state.request);
        return res;
      });
      response2.headers.delete("CDN-Cache-Control");
      response2.headers.delete("Cache-Tag");
      return response2;
    }
    const response = await next();
    applyCacheHeaders(cache, response, state.request);
    return response;
  }
}, "CacheHandler");
init_base_pipeline();
init_generator();
function isExternalURL(url) {
  return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
__name(isExternalURL, "isExternalURL");
function redirectIsExternal(redirect) {
  if (typeof redirect === "string")
    return isExternalURL(redirect);
  else
    return isExternalURL(redirect.destination);
}
__name(redirectIsExternal, "redirectIsExternal");
function computeRedirectStatus(method, redirect, redirectRoute) {
  return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
__name(computeRedirectStatus, "computeRedirectStatus");
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
  if (typeof redirectRoute !== "undefined")
    return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
  else if (typeof redirect === "string")
    if (redirectIsExternal(redirect))
      return redirect;
    else {
      let target = redirect;
      for (const param of Object.keys(params)) {
        const paramValue = params[param];
        target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
      }
      return target;
    }
  else if (typeof redirect === "undefined")
    return "/";
  return redirect.destination;
}
__name(resolveRedirectTarget, "resolveRedirectTarget");
async function renderRedirect(state) {
  state.pipeline.usedFeatures |= PipelineFeatures.redirects;
  const { redirect, redirectRoute } = state.routeData;
  const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
  const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.pipeline.manifest.trailingSlash)) };
  if (redirect && redirectIsExternal(redirect))
    if (typeof redirect === "string")
      return Response.redirect(redirect, status);
    else
      return Response.redirect(redirect.destination, status);
  return new Response(null, {
    status,
    headers
  });
}
__name(renderRedirect, "renderRedirect");
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
__name(jsonParseTransform, "jsonParseTransform");
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
__name(warnKeyDropped, "warnKeyDropped");
function destr(value, options = {}) {
  if (typeof value !== "string")
    return value;
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1)
    return value.slice(1, -1);
  const _value = value.trim();
  if (_value.length <= 9)
    switch (_value.toLowerCase()) {
      case "true":
        return true;
      case "false":
        return false;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
  if (!JsonSigRx.test(value)) {
    if (options.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error4) {
    if (options.strict)
      throw error4;
    return value;
  }
}
__name(destr, "destr");
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function")
    return Promise.resolve(value);
  return value;
}
__name(wrapToPromise, "wrapToPromise");
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error4) {
    return Promise.reject(error4);
  }
}
__name(asyncCall, "asyncCall");
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
__name(isPrimitive, "isPrimitive");
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
__name(isPureObject, "isPureObject");
function stringify$1(value) {
  if (isPrimitive(value))
    return String(value);
  if (isPureObject(value) || Array.isArray(value))
    return JSON.stringify(value);
  if (typeof value.toJSON === "function")
    return stringify$1(value.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
__name(stringify$1, "stringify$1");
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string")
    return value;
  return BASE64_PREFIX + base64Encode(value);
}
__name(serializeRaw, "serializeRaw");
function deserializeRaw(value) {
  if (typeof value !== "string")
    return value;
  if (!value.startsWith(BASE64_PREFIX))
    return value;
  return base64Decode(value.slice(7));
}
__name(deserializeRaw, "deserializeRaw");
function base64Decode(input) {
  if (globalThis.Buffer)
    return Buffer.from(input, "base64");
  return Uint8Array.from(globalThis.atob(input), (c) => c.codePointAt(0));
}
__name(base64Decode, "base64Decode");
function base64Encode(input) {
  if (globalThis.Buffer)
    return Buffer.from(input).toString("base64");
  return globalThis.btoa(String.fromCodePoint(...input));
}
__name(base64Encode, "base64Encode");
function normalizeKey$1(key) {
  if (!key)
    return "";
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
__name(normalizeKey$1, "normalizeKey$1");
function joinKeys$1(...keys) {
  return normalizeKey$1(keys.join(":"));
}
__name(joinKeys$1, "joinKeys$1");
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
__name(normalizeBaseKey, "normalizeBaseKey");
function filterKeyByDepth(key, depth) {
  if (depth === void 0)
    return true;
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
__name(filterKeyByDepth, "filterKeyByDepth");
function filterKeyByBase(key, base) {
  if (base)
    return key.startsWith(base) && key[key.length - 1] !== "$";
  return key[key.length - 1] !== "$";
}
__name(filterKeyByBase, "filterKeyByBase");
function defineDriver$1(factory) {
  return factory;
}
__name(defineDriver$1, "defineDriver$1");
var DRIVER_NAME$1 = "memory";
var memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context2 = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = /* @__PURE__ */ __name((key) => {
    for (const base of context2.mountpoints)
      if (key.startsWith(base))
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context2.mounts[base]
        };
    return {
      base: "",
      relativeKey: key,
      driver: context2.mounts[""]
    };
  }, "getMount");
  const getMounts = /* @__PURE__ */ __name((base, includeParent) => {
    return context2.mountpoints.filter((mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context2.mounts[mountpoint]
    }));
  }, "getMounts");
  const onChange = /* @__PURE__ */ __name((event, key) => {
    if (!context2.watching)
      return;
    key = normalizeKey$1(key);
    for (const listener of context2.watchListeners)
      listener(event, key);
  }, "onChange");
  const startWatch = /* @__PURE__ */ __name(async () => {
    if (context2.watching)
      return;
    context2.watching = true;
    for (const mountpoint in context2.mounts)
      context2.unwatch[mountpoint] = await watch(context2.mounts[mountpoint], onChange, mountpoint);
  }, "startWatch");
  const stopWatch = /* @__PURE__ */ __name(async () => {
    if (!context2.watching)
      return;
    for (const mountpoint in context2.unwatch)
      await context2.unwatch[mountpoint]();
    context2.unwatch = {};
    context2.watching = false;
  }, "stopWatch");
  const runBatch = /* @__PURE__ */ __name((items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = /* @__PURE__ */ __name((mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    }, "getBatch");
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : {
        ...commonOptions,
        ...item.options
      };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then((r2) => r2.flat());
  }, "runBatch");
  const storage = {
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then((value) => destr(value));
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems)
          return asyncCall(batch.driver.getItems, batch.items.map((item) => ({
            key: item.relativeKey,
            options: item.options
          })), commonOptions).then((r2) => r2.map((item) => ({
            key: joinKeys$1(batch.base, item.key),
            value: destr(item.value)
          })));
        return Promise.all(batch.items.map((item) => {
          return asyncCall(batch.driver.getItem, item.relativeKey, item.options).then((value) => ({
            key: item.key,
            value: destr(value)
          }));
        }));
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw)
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      return asyncCall(driver.getItem, relativeKey, opts).then((value) => deserializeRaw(value));
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0)
        return storage.removeItem(key);
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem)
        return;
      await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
      if (!driver.watch)
        onChange("update", key);
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems)
          return asyncCall(batch.driver.setItems, batch.items.map((item) => ({
            key: item.relativeKey,
            value: stringify$1(item.value),
            options: item.options
          })), commonOptions);
        if (!batch.driver.setItem)
          return;
        await Promise.all(batch.items.map((item) => {
          return asyncCall(batch.driver.setItem, item.relativeKey, stringify$1(item.value), item.options);
        }));
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0)
        return storage.removeItem(key, opts);
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw)
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      else if (driver.setItem)
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      else
        return;
      if (!driver.watch)
        onChange("update", key);
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean")
        opts = { removeMeta: opts };
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem)
        return;
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata)
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      if (!driver.watch)
        onChange("remove", key);
    },
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean")
        opts = { nativeOnly: opts };
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta)
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      if (!opts.nativeOnly) {
        const value = await asyncCall(driver.getItem, relativeKey + "$", opts).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string")
            value.atime = new Date(value.atime);
          if (typeof value.mtime === "string")
            value.mtime = new Date(value.mtime);
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth)
          allMountsSupportMaxDepth = false;
        const rawKeys = await asyncCall(mount.driver.getKeys, mount.relativeBase, opts);
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p)))
            allKeys.push(fullKey);
        }
        maskedMounts = [mount.mountpoint, ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter((key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base));
    },
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(getMounts(base, false).map(async (m) => {
        if (m.driver.clear)
          return asyncCall(m.driver.clear, m.relativeBase, opts);
        if (m.driver.removeItem) {
          const keys = await m.driver.getKeys(m.relativeBase || "", opts);
          return Promise.all(keys.map((key) => m.driver.removeItem(key, opts)));
        }
      }));
    },
    async dispose() {
      await Promise.all(Object.values(context2.mounts).map((driver) => dispose(driver)));
    },
    async watch(callback) {
      await startWatch();
      context2.watchListeners.push(callback);
      return async () => {
        context2.watchListeners = context2.watchListeners.filter((listener) => listener !== callback);
        if (context2.watchListeners.length === 0)
          await stopWatch();
      };
    },
    async unwatch() {
      context2.watchListeners = [];
      await stopWatch();
    },
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context2.mounts[base])
        throw new Error(`already mounted at ${base}`);
      if (base) {
        context2.mountpoints.push(base);
        context2.mountpoints.sort((a2, b) => b.length - a2.length);
      }
      context2.mounts[base] = driver;
      if (context2.watching)
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context2.unwatch[base] = unwatcher;
        }).catch(console.error);
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context2.mounts[base])
        return;
      if (context2.watching && base in context2.unwatch) {
        context2.unwatch[base]?.();
        delete context2.unwatch[base];
      }
      if (_dispose)
        await dispose(context2.mounts[base]);
      context2.mountpoints = context2.mountpoints.filter((key) => key !== base);
      delete context2.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      return getMounts(base, opts.parents).map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
__name(createStorage, "createStorage");
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
__name(watch, "watch");
async function dispose(driver) {
  if (typeof driver.dispose === "function")
    await asyncCall(driver.dispose);
}
__name(dispose, "dispose");
init_errors_data();
init_errors$2();
var PERSIST_SYMBOL = /* @__PURE__ */ Symbol();
var DEFAULT_COOKIE_NAME = "astro-session";
var VALID_COOKIE_REGEX = /^[\w-]+$/;
var unflatten = /* @__PURE__ */ __name((parsed, _) => {
  return unflatten$1(parsed, { URL: (href) => new URL(href) });
}, "unflatten");
var stringify = /* @__PURE__ */ __name((data, _) => {
  return stringify$2(data, { URL: (val) => val instanceof URL && val.href });
}, "stringify");
var _cookies, _config, _cookieConfig, _cookieName, _storage, _data, _sessionID, _toDestroy, _toDelete, _dirty, _cookieSet, _sessionIDFromCookie, _partial, _driverFactory, _a2, _sharedStorage, _setCookie, setCookie_fn, _ensureData, ensureData_fn, _ensureSessionID, ensureSessionID_fn, _ensureStorage, ensureStorage_fn;
var AstroSession = (/* @__PURE__ */ __name(_a2 = class {
  constructor({ cookies, config: config3, runtimeMode, driverFactory, mockStorage }) {
    /**
    * Sets the session cookie.
    */
    __privateAdd(this, _setCookie);
    /**
    * Attempts to load the session data from storage, or creates a new data object if none exists.
    * If there is existing partial data, it will be merged into the new data object.
    */
    __privateAdd(this, _ensureData);
    /**
    * Returns the session ID, generating a new one if it does not exist.
    */
    __privateAdd(this, _ensureSessionID);
    /**
    * Ensures the storage is initialized.
    * This is called automatically when a storage operation is needed.
    */
    __privateAdd(this, _ensureStorage);
    __privateAdd(this, _cookies, void 0);
    __privateAdd(this, _config, void 0);
    __privateAdd(this, _cookieConfig, void 0);
    __privateAdd(this, _cookieName, void 0);
    __privateAdd(this, _storage, void 0);
    __privateAdd(this, _data, void 0);
    __privateAdd(this, _sessionID, void 0);
    __privateAdd(this, _toDestroy, /* @__PURE__ */ new Set());
    __privateAdd(this, _toDelete, /* @__PURE__ */ new Set());
    __privateAdd(this, _dirty, false);
    __privateAdd(this, _cookieSet, false);
    __privateAdd(this, _sessionIDFromCookie, false);
    __privateAdd(this, _partial, true);
    __privateAdd(this, _driverFactory, void 0);
    if (!config3)
      throw new AstroError({
        ...SessionStorageInitError,
        message: SessionStorageInitError.message("No driver was defined in the session configuration and the adapter did not provide a default driver.")
      });
    __privateSet(this, _cookies, cookies);
    __privateSet(this, _driverFactory, driverFactory);
    const { cookie: cookieConfig = DEFAULT_COOKIE_NAME, ...configRest } = config3;
    let cookieConfigObject;
    if (typeof cookieConfig === "object") {
      const { name = DEFAULT_COOKIE_NAME, ...rest } = cookieConfig;
      __privateSet(this, _cookieName, name);
      cookieConfigObject = rest;
    } else
      __privateSet(this, _cookieName, cookieConfig || DEFAULT_COOKIE_NAME);
    __privateSet(this, _cookieConfig, {
      sameSite: "lax",
      secure: runtimeMode === "production",
      path: "/",
      ...cookieConfigObject,
      httpOnly: true
    });
    __privateSet(this, _config, configRest);
    if (mockStorage)
      __privateSet(this, _storage, mockStorage);
  }
  /**
  * Gets a session value. Returns `undefined` if the session or value does not exist.
  */
  async get(key) {
    return (await __privateMethod(this, _ensureData, ensureData_fn).call(this)).get(key)?.data;
  }
  /**
  * Checks if a session value exists.
  */
  async has(key) {
    return (await __privateMethod(this, _ensureData, ensureData_fn).call(this)).has(key);
  }
  /**
  * Gets all session values.
  */
  async keys() {
    return (await __privateMethod(this, _ensureData, ensureData_fn).call(this)).keys();
  }
  /**
  * Gets all session values.
  */
  async values() {
    return [...(await __privateMethod(this, _ensureData, ensureData_fn).call(this)).values()].map((entry) => entry.data);
  }
  /**
  * Gets all session entries.
  */
  async entries() {
    return [...(await __privateMethod(this, _ensureData, ensureData_fn).call(this)).entries()].map(([key, entry]) => [key, entry.data]);
  }
  /**
  * Deletes a session value.
  */
  delete(key) {
    __privateGet(this, _data) ?? __privateSet(this, _data, /* @__PURE__ */ new Map());
    __privateGet(this, _data).delete(key);
    if (__privateGet(this, _partial))
      __privateGet(this, _toDelete).add(key);
    __privateSet(this, _dirty, true);
  }
  /**
  * Sets a session value. The session is created if it does not exist.
  */
  set(key, value, { ttl } = {}) {
    if (!key)
      throw new AstroError({
        ...SessionStorageSaveError,
        message: "The session key was not provided."
      });
    let cloned;
    try {
      cloned = unflatten(JSON.parse(stringify(value)));
    } catch (err) {
      throw new AstroError({
        ...SessionStorageSaveError,
        message: `The session data for ${key} could not be serialized.`,
        hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
      }, { cause: err });
    }
    if (!__privateGet(this, _cookieSet)) {
      __privateMethod(this, _setCookie, setCookie_fn).call(this);
      __privateSet(this, _cookieSet, true);
    }
    __privateGet(this, _data) ?? __privateSet(this, _data, /* @__PURE__ */ new Map());
    const lifetime = ttl ?? __privateGet(this, _config).ttl;
    const expires = typeof lifetime === "number" ? Date.now() + lifetime * 1e3 : lifetime;
    __privateGet(this, _data).set(key, {
      data: cloned,
      expires
    });
    __privateSet(this, _dirty, true);
  }
  /**
  * Destroys the session, clearing the cookie and storage if it exists.
  */
  destroy() {
    const sessionId = __privateGet(this, _sessionID) ?? __privateGet(this, _cookies).get(__privateGet(this, _cookieName))?.value;
    if (sessionId)
      __privateGet(this, _toDestroy).add(sessionId);
    __privateGet(this, _cookies).delete(__privateGet(this, _cookieName), __privateGet(this, _cookieConfig));
    __privateSet(this, _sessionID, void 0);
    __privateSet(this, _data, void 0);
    __privateSet(this, _dirty, true);
  }
  /**
  * Regenerates the session, creating a new session ID. The existing session data is preserved.
  */
  async regenerate() {
    let data = /* @__PURE__ */ new Map();
    try {
      data = await __privateMethod(this, _ensureData, ensureData_fn).call(this);
    } catch (err) {
      console.error("Failed to load session data during regeneration:", err);
    }
    const oldSessionId = __privateGet(this, _sessionID);
    __privateSet(this, _sessionID, crypto.randomUUID());
    __privateSet(this, _sessionIDFromCookie, false);
    __privateSet(this, _data, data);
    __privateSet(this, _dirty, true);
    await __privateMethod(this, _setCookie, setCookie_fn).call(this);
    if (oldSessionId && __privateGet(this, _storage))
      __privateGet(this, _storage).removeItem(oldSessionId).catch((err) => {
        console.error("Failed to remove old session data:", err);
      });
  }
  async [PERSIST_SYMBOL]() {
    if (!__privateGet(this, _dirty) && !__privateGet(this, _toDestroy).size)
      return;
    const storage = await __privateMethod(this, _ensureStorage, ensureStorage_fn).call(this);
    if (__privateGet(this, _dirty) && __privateGet(this, _data)) {
      const data = await __privateMethod(this, _ensureData, ensureData_fn).call(this);
      __privateGet(this, _toDelete).forEach((key2) => data.delete(key2));
      const key = __privateMethod(this, _ensureSessionID, ensureSessionID_fn).call(this);
      let serialized;
      try {
        serialized = stringify(data);
      } catch (err) {
        throw new AstroError({
          ...SessionStorageSaveError,
          message: SessionStorageSaveError.message("The session data could not be serialized.", __privateGet(this, _config).driver)
        }, { cause: err });
      }
      await storage.setItem(key, serialized);
      __privateSet(this, _dirty, false);
    }
    if (__privateGet(this, _toDestroy).size > 0) {
      const cleanupPromises = [...__privateGet(this, _toDestroy)].map((sessionId) => storage.removeItem(sessionId).catch((err) => {
        console.error("Failed to clean up session %s:", sessionId, err);
      }));
      await Promise.all(cleanupPromises);
      __privateGet(this, _toDestroy).clear();
    }
  }
  get sessionID() {
    return __privateGet(this, _sessionID);
  }
  /**
  * Loads a session from storage with the given ID, and replaces the current session.
  * Any changes made to the current session will be lost.
  * This is not normally needed, as the session is automatically loaded using the cookie.
  * However it can be used to restore a session where the ID has been recorded somewhere
  * else (e.g. in a database).
  */
  async load(sessionID) {
    __privateSet(this, _sessionID, sessionID);
    __privateSet(this, _data, void 0);
    await __privateMethod(this, _setCookie, setCookie_fn).call(this);
    await __privateMethod(this, _ensureData, ensureData_fn).call(this);
  }
}, "AstroSession"), _cookies = new WeakMap(), _config = new WeakMap(), _cookieConfig = new WeakMap(), _cookieName = new WeakMap(), _storage = new WeakMap(), _data = new WeakMap(), _sessionID = new WeakMap(), _toDestroy = new WeakMap(), _toDelete = new WeakMap(), _dirty = new WeakMap(), _cookieSet = new WeakMap(), _sessionIDFromCookie = new WeakMap(), _partial = new WeakMap(), _driverFactory = new WeakMap(), _sharedStorage = new WeakMap(), _setCookie = new WeakSet(), setCookie_fn = /* @__PURE__ */ __name(async function() {
  if (!VALID_COOKIE_REGEX.test(__privateGet(this, _cookieName)))
    throw new AstroError({
      ...SessionStorageSaveError,
      message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes."
    });
  const value = __privateMethod(this, _ensureSessionID, ensureSessionID_fn).call(this);
  __privateGet(this, _cookies).set(__privateGet(this, _cookieName), value, __privateGet(this, _cookieConfig));
}, "#setCookie"), _ensureData = new WeakSet(), ensureData_fn = /* @__PURE__ */ __name(async function() {
  if (__privateGet(this, _data) && !__privateGet(this, _partial))
    return __privateGet(this, _data);
  __privateGet(this, _data) ?? __privateSet(this, _data, /* @__PURE__ */ new Map());
  if (!__privateGet(this, _sessionID) && !__privateGet(this, _cookies).get(__privateGet(this, _cookieName))?.value) {
    __privateSet(this, _partial, false);
    return __privateGet(this, _data);
  }
  const raw = await (await __privateMethod(this, _ensureStorage, ensureStorage_fn).call(this)).get(__privateMethod(this, _ensureSessionID, ensureSessionID_fn).call(this));
  if (!raw) {
    if (__privateGet(this, _sessionIDFromCookie)) {
      __privateSet(this, _sessionID, crypto.randomUUID());
      __privateSet(this, _sessionIDFromCookie, false);
      if (__privateGet(this, _cookieSet))
        await __privateMethod(this, _setCookie, setCookie_fn).call(this);
    }
    return __privateGet(this, _data);
  }
  try {
    const storedMap = unflatten(raw);
    if (!(storedMap instanceof Map)) {
      await this.destroy();
      throw new AstroError({
        ...SessionStorageInitError,
        message: SessionStorageInitError.message("The session data was an invalid type.", __privateGet(this, _config).driver)
      });
    }
    const now = Date.now();
    for (const [key, value] of storedMap) {
      const expired = typeof value.expires === "number" && value.expires < now;
      if (!__privateGet(this, _data).has(key) && !__privateGet(this, _toDelete).has(key) && !expired)
        __privateGet(this, _data).set(key, value);
    }
    __privateSet(this, _partial, false);
    return __privateGet(this, _data);
  } catch (err) {
    await this.destroy();
    if (err instanceof AstroError)
      throw err;
    throw new AstroError({
      ...SessionStorageInitError,
      message: SessionStorageInitError.message("The session data could not be parsed.", __privateGet(this, _config).driver)
    }, { cause: err });
  }
}, "#ensureData"), _ensureSessionID = new WeakSet(), ensureSessionID_fn = /* @__PURE__ */ __name(function() {
  if (!__privateGet(this, _sessionID)) {
    const cookieValue = __privateGet(this, _cookies).get(__privateGet(this, _cookieName))?.value;
    if (cookieValue) {
      __privateSet(this, _sessionID, cookieValue);
      __privateSet(this, _sessionIDFromCookie, true);
    } else
      __privateSet(this, _sessionID, crypto.randomUUID());
  }
  return __privateGet(this, _sessionID);
}, "#ensureSessionID"), _ensureStorage = new WeakSet(), ensureStorage_fn = /* @__PURE__ */ __name(async function() {
  if (__privateGet(this, _storage))
    return __privateGet(this, _storage);
  if (__privateGet(_a2, _sharedStorage).has(__privateGet(this, _config).driver)) {
    __privateSet(this, _storage, __privateGet(_a2, _sharedStorage).get(__privateGet(this, _config).driver));
    return __privateGet(this, _storage);
  }
  if (!__privateGet(this, _driverFactory))
    throw new AstroError({
      ...SessionStorageInitError,
      message: SessionStorageInitError.message("Astro could not load the driver correctly. Does it exist?", __privateGet(this, _config).driver)
    });
  const driver = __privateGet(this, _driverFactory);
  try {
    __privateSet(this, _storage, createStorage({ driver: {
      ...driver(__privateGet(this, _config).options),
      hasItem() {
        return false;
      },
      getKeys() {
        return [];
      }
    } }));
    __privateGet(_a2, _sharedStorage).set(__privateGet(this, _config).driver, __privateGet(this, _storage));
    return __privateGet(this, _storage);
  } catch (err) {
    throw new AstroError({
      ...SessionStorageInitError,
      message: SessionStorageInitError.message("Unknown error", __privateGet(this, _config).driver)
    }, { cause: err });
  }
}, "#ensureStorage"), __privateAdd(_a2, _sharedStorage, /* @__PURE__ */ new Map()), _a2);
init_base_pipeline();
var SESSION_KEY = "session";
function provideSession(state) {
  state.pipeline.usedFeatures |= PipelineFeatures.sessions;
  const config3 = state.pipeline.manifest.sessionConfig;
  if (!config3)
    return;
  return provideSessionAsync(state, config3);
}
__name(provideSession, "provideSession");
async function provideSessionAsync(state, config3) {
  const pipeline = state.pipeline;
  const driverFactory = await pipeline.getSessionDriver();
  if (!driverFactory)
    return;
  state.provide(SESSION_KEY, {
    create() {
      const cookies = state.cookies;
      return new AstroSession({
        cookies,
        config: config3,
        runtimeMode: pipeline.runtimeMode,
        driverFactory,
        mockStorage: null
      });
    },
    finalize(session) {
      return session[PERSIST_SYMBOL]();
    }
  });
}
__name(provideSessionAsync, "provideSessionAsync");
init_constants();
init_base_pipeline();
var AstroHandler = /* @__PURE__ */ __name(class {
  #app;
  #trailingSlashHandler;
  #actionHandler;
  #astroMiddleware;
  #pagesHandler;
  #cacheHandler;
  /** Bound callback for the middleware chain — created once, reused per request. */
  #renderRouteCallback;
  /**
  * i18n post-processor. Only set when the app has i18n configured and
  * the strategy is not `manual` — for the manual strategy users wire
  * `astro:i18n.middleware(...)` into their own `onRequest`.
  */
  #i18n;
  /** Whether sessions are configured on the manifest. */
  #hasSession;
  constructor(app) {
    this.#app = app;
    this.#trailingSlashHandler = new TrailingSlashHandler(app);
    this.#actionHandler = new ActionHandler();
    this.#astroMiddleware = new AstroMiddleware(app.pipeline);
    this.#pagesHandler = new PagesHandler(app.pipeline);
    this.#cacheHandler = new CacheHandler(app);
    this.#renderRouteCallback = this.#actionsAndPages.bind(this);
    this.#hasSession = !!app.manifest.sessionConfig;
    const i18n = app.manifest.i18n;
    if (i18n && i18n.strategy !== "manual")
      this.#i18n = new I18n(i18n, app.manifest.base, app.manifest.trailingSlash, app.manifest.buildFormat);
  }
  /**
  * Runs actions then pages — the callback at the bottom of the
  * middleware chain. Bound once in the constructor to avoid
  * per-request closure allocation.
  */
  #actionsAndPages(state, ctx) {
    if (!state.skipMiddleware) {
      const actionResult = this.#actionHandler.handle(ctx, state);
      if (actionResult)
        return actionResult.then((response) => response ?? this.#pagesHandler.handle(state, ctx));
    }
    return this.#pagesHandler.handle(state, ctx);
  }
  async handle(state) {
    state.pipeline.usedFeatures |= ALL_PIPELINE_FEATURES;
    if (state.invalidEncoding)
      return new Response(null, {
        status: 400,
        statusText: "Bad Request"
      });
    const trailingSlashRedirect = this.#trailingSlashHandler.handle(state);
    if (trailingSlashRedirect)
      return trailingSlashRedirect;
    if (!state.routeData)
      return this.#app.renderError(state.request, {
        ...state.renderOptions,
        status: 404,
        pathname: state.pathname
      });
    return this.render(state);
  }
  /**
  * Renders a response for the given `FetchState`. Assumes
  * trailing-slash redirects and routeData resolution have already run.
  *
  * User-triggered rewrites (`Astro.rewrite` / `ctx.rewrite`) go through
  * `Rewrites.execute` on the current `FetchState` — they mutate the
  * existing state in place and re-run middleware + page dispatch.
  */
  async render(state) {
    const routeData = state.routeData;
    const pathname = state.pathname;
    const request = state.request;
    const { addCookieHeader } = state.renderOptions;
    state.status = this.#app.getDefaultStatusCode(routeData, pathname);
    let response;
    try {
      const sessionP = this.#hasSession ? provideSession(state) : void 0;
      const cacheP = provideCache(state);
      if (sessionP || cacheP)
        await Promise.all([sessionP, cacheP]);
      state.pipeline.usedFeatures |= PipelineFeatures.sessions;
      if (routeData.type === "redirect") {
        const redirectResponse = await renderRedirect(state);
        this.#app.logThisRequest({
          pathname,
          method: request.method,
          statusCode: redirectResponse.status,
          isRewrite: false,
          timeStart: state.timeStart
        });
        prepareResponse(redirectResponse, { addCookieHeader });
        this.#app.pipeline.logger.flush();
        return redirectResponse;
      }
      if (!this.#app.pipeline.cacheProvider) {
        this.#app.pipeline.usedFeatures |= PipelineFeatures.cache;
        response = await this.#astroMiddleware.handle(state, this.#renderRouteCallback);
        if (this.#i18n)
          response = await this.#i18n.finalize(state, response);
      } else {
        const runPipeline = /* @__PURE__ */ __name(async () => {
          let res = await this.#astroMiddleware.handle(state, this.#renderRouteCallback);
          if (this.#i18n)
            res = await this.#i18n.finalize(state, res);
          return res;
        }, "runPipeline");
        response = await this.#cacheHandler.handle(state, runPipeline);
      }
      this.#app.logThisRequest({
        pathname,
        method: request.method,
        statusCode: response.status,
        isRewrite: state.isRewriting,
        timeStart: state.timeStart
      });
    } catch (err) {
      this.#app.logger.error(null, err.stack || err.message || String(err));
      return this.#app.renderError(request, {
        ...state.renderOptions,
        status: 500,
        error: err,
        pathname: state.pathname
      });
    } finally {
      const finalize2 = state.finalizeAll();
      if (finalize2)
        await finalize2;
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute)
      return this.#app.renderError(request, {
        ...state.renderOptions,
        response,
        status: response.status,
        error: response.status === 500 ? null : void 0,
        pathname: state.pathname
      });
    prepareResponse(response, { addCookieHeader });
    this.#app.pipeline.logger.flush();
    return response;
  }
}, "AstroHandler");
init_constants();
var DefaultFetchHandler = /* @__PURE__ */ __name(class {
  #app;
  #handler;
  constructor(app) {
    this.#app = app ?? null;
    this.#handler = app ? new AstroHandler(app) : null;
  }
  /**
  * Fast path: called directly by `BaseApp.render()` with pre-resolved
  * options, avoiding the `Reflect.set/get` round-trip through the request.
  */
  renderWithOptions(request, options) {
    if (!this.#app) {
      const app = Reflect.get(request, appSymbol);
      if (!app)
        throw new Error("No fetch handler provided.");
      this.#app = app;
      this.#handler = new AstroHandler(app);
    }
    const state = new FetchState(this.#app.pipeline, request, options);
    return this.#handler.handle(state);
  }
  fetch = (request) => {
    if (!this.#app) {
      const app = Reflect.get(request, appSymbol);
      if (!app)
        throw new Error("No fetch handler provided.");
      this.#app = app;
      this.#handler = new AstroHandler(app);
    }
    const state = new FetchState(this.#app.pipeline, request);
    if (!this.#handler)
      throw new Error("No fetch handler provided.");
    return this.#handler.handle(state);
  };
}, "DefaultFetchHandler");
init_path();
var STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["/404", "/500"]);
function getOutputFilename(buildFormat, name, routeData) {
  if (routeData.type === "endpoint")
    return name;
  if (name === "/" || name === "")
    return name === "" ? "index.html" : "/index.html";
  if (buildFormat === "file" || STATUS_CODE_PAGES.has(name))
    return `${removeTrailingForwardSlash(name || "index")}.html`;
  if (buildFormat === "preserve" && !routeData.isIndex)
    return `${removeTrailingForwardSlash(name || "index")}.html`;
  return `${removeTrailingForwardSlash(name)}/index.html`;
}
__name(getOutputFilename, "getOutputFilename");
var DefaultErrorHandler = /* @__PURE__ */ __name(class {
  #app;
  #astroMiddleware;
  #pagesHandler;
  constructor(app) {
    this.#app = app;
    this.#astroMiddleware = new AstroMiddleware(app.pipeline);
    this.#pagesHandler = new PagesHandler(app.pipeline);
  }
  async renderError(request, { status, response: originalResponse, skipMiddleware = false, error: error4, pathname, ...resolvedRenderOptions }) {
    const app = this.#app;
    const resolvedPathname = pathname ?? new FetchState(app.pipeline, request).pathname;
    const errorRouteData = matchRoute(getErrorRoutePath(resolvedPathname, status, app.manifestData.routes, app.manifest.i18n?.locales, app.manifest.trailingSlash === "always"), app.manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const allowedDomains = app.manifest.allowedDomains;
        const safeOrigin = validateHost(url.host, url.protocol.replace(":", ""), allowedDomains) ? url.origin : `${url.protocol}//localhost`;
        const statusURL = new URL(`${app.baseWithoutTrailingSlash}${getOutputFilename(app.manifest.buildFormat, errorRouteData.route, errorRouteData)}`, safeOrigin);
        if (statusURL.toString() !== request.url && resolvedRenderOptions.prerenderedErrorPageFetch)
          try {
            const newResponse = mergeResponses(await resolvedRenderOptions.prerenderedErrorPageFetch(statusURL.toString()), originalResponse, {
              status,
              removeContentEncodingHeaders: true
            });
            prepareResponse(newResponse, resolvedRenderOptions);
            return newResponse;
          } catch {
            const response2 = mergeResponses(new Response(null, { status }), originalResponse);
            prepareResponse(response2, resolvedRenderOptions);
            return response2;
          }
      }
      const mod = await app.pipeline.getComponentByRoute(errorRouteData);
      const errorState = new FetchState(app.pipeline, request);
      errorState.skipMiddleware = skipMiddleware;
      errorState.clientAddress = resolvedRenderOptions.clientAddress;
      errorState.routeData = errorRouteData;
      errorState.pathname = resolvedPathname;
      errorState.status = status;
      errorState.componentInstance = mod;
      errorState.locals = resolvedRenderOptions.locals ?? {};
      errorState.initialProps = { error: error4 };
      try {
        await provideSession(errorState);
        const newResponse = mergeResponses(await this.#astroMiddleware.handle(errorState, this.#pagesHandler.handle.bind(this.#pagesHandler)), originalResponse);
        prepareResponse(newResponse, resolvedRenderOptions);
        return newResponse;
      } catch {
        if (skipMiddleware === false)
          return this.renderError(request, {
            ...resolvedRenderOptions,
            status,
            error: error4,
            response: originalResponse,
            skipMiddleware: true,
            pathname: resolvedPathname
          });
      } finally {
        await errorState.finalizeAll();
      }
    }
    const response = mergeResponses(new Response(null, { status }), originalResponse);
    prepareResponse(response, resolvedRenderOptions);
    return response;
  }
}, "DefaultErrorHandler");
function mergeResponses(newResponse, originalResponse, override) {
  let newResponseHeaders = newResponse.headers;
  if (override?.removeContentEncodingHeaders) {
    newResponseHeaders = new Headers(newResponseHeaders);
    newResponseHeaders.delete("Content-Encoding");
    newResponseHeaders.delete("Content-Length");
  }
  if (!originalResponse) {
    if (override !== void 0)
      return new Response(newResponse.body, {
        status: override.status,
        statusText: newResponse.statusText,
        headers: newResponseHeaders
      });
    return newResponse;
  }
  const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
  try {
    originalResponse.headers.delete("Content-type");
    originalResponse.headers.delete("Content-Length");
    originalResponse.headers.delete("Transfer-Encoding");
  } catch {
  }
  const newHeaders = new Headers();
  const seen = /* @__PURE__ */ new Set();
  for (const [name, value] of originalResponse.headers) {
    newHeaders.append(name, value);
    seen.add(name.toLowerCase());
  }
  for (const [name, value] of newResponseHeaders)
    if (!seen.has(name.toLowerCase()))
      newHeaders.append(name, value);
  const mergedResponse = new Response(newResponse.body, {
    status,
    statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
    headers: newHeaders
  });
  const originalCookies = getCookiesFromResponse(originalResponse);
  const newCookies = getCookiesFromResponse(newResponse);
  if (originalCookies) {
    if (newCookies)
      for (const cookieValue of newCookies.consume())
        originalResponse.headers.append("set-cookie", cookieValue);
    attachCookiesToResponse(mergedResponse, originalCookies);
  } else if (newCookies)
    attachCookiesToResponse(mergedResponse, newCookies);
  return mergedResponse;
}
__name(mergeResponses, "mergeResponses");
init_path$1();
init_base_pipeline();
init_constants();
init_errors$2();
init_core$2();
init_route_errors();
var _adapterLogger, _fetchHandler, _errorHandler, _hasCustomFetchHandler, _featureCheckDone, _a3, _warnMissingFeatures, warnMissingFeatures_fn;
var BaseApp = (/* @__PURE__ */ __name(_a3 = class {
  constructor(manifest2, streaming = true, ...args) {
    /**
    * One-shot check: after the first request with a custom `src/fetch.ts`,
    * compare `usedFeatures` against the manifest and warn about any
    * configured features the user's pipeline doesn't call.
    */
    __privateAdd(this, _warnMissingFeatures);
    __publicField(this, "manifest");
    __publicField(this, "manifestData");
    __publicField(this, "pipeline");
    __privateAdd(this, _adapterLogger, void 0);
    __publicField(this, "baseWithoutTrailingSlash");
    /**
    * The handler that turns incoming `Request` objects into `Response`s.
    * Defaults to a `DefaultFetchHandler` pinned to this app and can be
    * overridden via `setFetchHandler` — typically by the bundled
    * entrypoint after importing `virtual:astro:fetchable`.
    */
    __privateAdd(this, _fetchHandler, void 0);
    __privateAdd(this, _errorHandler, void 0);
    /**
    * Whether a custom fetch handler (from `src/fetch.ts`) has been set
    * via `setFetchHandler`. When false, the `DefaultFetchHandler` is
    * in use and all features are implicitly active.
    */
    __privateAdd(this, _hasCustomFetchHandler, false);
    /**
    * Whether the missing-feature check has already run. We only want
    * to warn once — after the first request in dev, or at build end.
    */
    __privateAdd(this, _featureCheckDone, false);
    this.manifest = manifest2;
    this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest2.base);
    this.pipeline = this.createPipeline(streaming, manifest2, ...args);
    this.manifestData = this.pipeline.manifestData;
    __privateSet(this, _fetchHandler, new DefaultFetchHandler(this));
    __privateSet(this, _errorHandler, this.createErrorHandler());
  }
  get logger() {
    return this.pipeline.logger;
  }
  get adapterLogger() {
    const currentOptions = this.logger.options;
    if (!__privateGet(this, _adapterLogger) || __privateGet(this, _adapterLogger).options !== currentOptions)
      __privateSet(this, _adapterLogger, new AstroIntegrationLogger(currentOptions, this.manifest.adapterName));
    return __privateGet(this, _adapterLogger);
  }
  /**
  * Override the fetch handler used to dispatch requests. Entrypoints
  * call this with the default export of `virtual:astro:fetchable` to
  * plug in a user-authored handler from `src/fetch.ts`.
  */
  setFetchHandler(handler) {
    __privateSet(this, _fetchHandler, handler);
    __privateSet(this, _hasCustomFetchHandler, !(handler instanceof DefaultFetchHandler));
  }
  /**
  * Returns the error handler strategy used by this app. Override to
  * provide environment-specific behavior (dev overlay, build-time throws, etc.).
  */
  createErrorHandler() {
    return new DefaultErrorHandler(this);
  }
  /**
  * Resets the cached adapter logger so it picks up a new logger instance.
  * Used by BuildApp when the logger is replaced via setOptions().
  */
  resetAdapterLogger() {
    __privateSet(this, _adapterLogger, void 0);
  }
  getAllowedDomains() {
    return this.manifest.allowedDomains;
  }
  matchesAllowedDomains(forwardedHost, protocol) {
    return _a3.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
  }
  static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
    if (!allowedDomains || allowedDomains.length === 0)
      return false;
    try {
      const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
      return allowedDomains.some((pattern) => {
        return matchPattern(testUrl, pattern);
      });
    } catch {
      return false;
    }
  }
  set setManifestData(newManifestData) {
    this.manifestData = newManifestData;
    this.pipeline.manifestData = newManifestData;
    this.pipeline.rebuildRouter();
  }
  removeBase(pathname) {
    pathname = collapseDuplicateLeadingSlashes(pathname);
    if (pathname.startsWith(this.manifest.base))
      return pathname.slice(this.baseWithoutTrailingSlash.length + 1);
    return pathname;
  }
  /**
  * Decodes a pathname with `decodeURI`, falling back to the raw pathname when it
  * contains an invalid percent-sequence (e.g. `%C0%AF`, an overlong-UTF-8 encoding of
  * `/` commonly sent by path-traversal scanners). A raw `decodeURI()` would throw
  * `URIError: URI malformed`, and because `match()` runs before `render()` that error
  * escapes the adapter's request handler as an uncaught exception (HTTP 500) that user
  * middleware can't catch.
  */
  safeDecodeURI(pathname) {
    try {
      return decodeURI(pathname);
    } catch (e2) {
      this.adapterLogger.debug(e2.toString());
      return pathname;
    }
  }
  /**
  * Extracts the base-stripped, decoded pathname from a request.
  * Used by adapters to compute the pathname for dev-mode route matching.
  */
  getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    return this.safeDecodeURI(pathname);
  }
  /**
  * Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
  * routes aren't returned, even if they are matched.
  *
  * When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
  * @param request
  * @param allowPrerenderedRoutes
  */
  match(request, allowPrerenderedRoutes = false) {
    const url = new URL(request.url);
    if (this.manifest.assets.has(url.pathname))
      return void 0;
    let pathname = this.computePathnameFromDomain(request);
    if (!pathname)
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    const routeData = this.pipeline.matchRoute(this.safeDecodeURI(pathname));
    if (!routeData)
      return void 0;
    if (allowPrerenderedRoutes)
      return routeData;
    if (routeData.prerender) {
      if (routeData.params.length > 0)
        return this.pipeline.matchAllRoutes(this.safeDecodeURI(pathname)).find((r2) => !r2.prerender);
      return;
    }
    return routeData;
  }
  /**
  * A matching route function to use in the development server.
  * Contrary to the `.match` function, this function resolves props and params, returning the correct
  * route based on the priority, segments. It also returns the correct, resolved pathname.
  * @param pathname
  */
  devMatch(pathname) {
  }
  computePathnameFromDomain(request) {
    return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.logger);
  }
  async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
    await this.pipeline.getLogger();
    if (routeData) {
      this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
      this.logger.debug("router", "RouteData");
      this.logger.debug("router", routeData);
    }
    if (locals) {
      if (typeof locals !== "object") {
        const error4 = new AstroError(LocalsNotAnObject);
        this.logger.error(null, error4.stack);
        return this.renderError(request, {
          addCookieHeader,
          clientAddress,
          prerenderedErrorPageFetch,
          locals: void 0,
          routeData,
          waitUntil,
          status: 500,
          error: error4
        });
      }
    }
    if (!routeData) {
      const domainPathname = this.computePathnameFromDomain(request);
      if (domainPathname)
        routeData = this.pipeline.matchRoute(this.safeDecodeURI(domainPathname));
    }
    const resolvedOptions = {
      addCookieHeader,
      clientAddress,
      prerenderedErrorPageFetch,
      locals,
      routeData,
      waitUntil
    };
    let response;
    if (__privateGet(this, _fetchHandler) instanceof DefaultFetchHandler) {
      Reflect.set(request, appSymbol, this);
      response = await __privateGet(this, _fetchHandler).renderWithOptions(request, resolvedOptions);
    } else {
      setRenderOptions(request, resolvedOptions);
      Reflect.set(request, appSymbol, this);
      response = await __privateGet(this, _fetchHandler).fetch(request);
    }
    __privateMethod(this, _warnMissingFeatures, warnMissingFeatures_fn).call(this);
    if (response.headers.get("X-Astro-Error")) {
      response.headers.delete(ASTRO_ERROR_HEADER);
      return this.renderError(request, {
        addCookieHeader,
        clientAddress,
        prerenderedErrorPageFetch,
        locals,
        routeData,
        waitUntil,
        response,
        status: response.status,
        error: response.status === 500 ? null : void 0
      });
    }
    return response;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
  * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
  * This also handles pre-rendered /404 or /500 routes.
  *
  * Delegates to the app's configured `ErrorHandler`. To customize behavior
  * for a specific environment, override `createErrorHandler()` rather than
  * this method.
  */
  async renderError(request, options) {
    return __privateGet(this, _errorHandler).renderError(request, options);
  }
  getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.test(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes)
        if (fallbackRoute.pattern.test(pathname))
          return 302;
    }
    const route = removeTrailingForwardSlash(routeData.route);
    const locales = this.manifest.i18n?.locales;
    if (isRoute404(route) || isLocalizedErrorRoute(route, 404, locales))
      return 404;
    if (isRoute500(route) || isLocalizedErrorRoute(route, 500, locales))
      return 500;
    return 200;
  }
  getManifest() {
    return this.pipeline.manifest;
  }
  logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
    const timeEnd3 = performance.now();
    this.logRequest({
      pathname,
      method,
      statusCode,
      isRewrite,
      reqTime: timeEnd3 - timeStart
    });
  }
}, "BaseApp"), _adapterLogger = new WeakMap(), _fetchHandler = new WeakMap(), _errorHandler = new WeakMap(), _hasCustomFetchHandler = new WeakMap(), _featureCheckDone = new WeakMap(), _warnMissingFeatures = new WeakSet(), warnMissingFeatures_fn = /* @__PURE__ */ __name(function() {
  if (__privateGet(this, _featureCheckDone) || !__privateGet(this, _hasCustomFetchHandler))
    return;
  __privateSet(this, _featureCheckDone, true);
  const manifest2 = this.manifest;
  const missing = [];
  const used = this.pipeline.usedFeatures;
  if (manifest2.routes.some((r2) => r2.routeData.type === "redirect") && !(used & PipelineFeatures.redirects))
    missing.push("redirects");
  if (manifest2.sessionConfig && !(used & PipelineFeatures.sessions))
    missing.push("sessions");
  if (manifest2.actions && !(used & PipelineFeatures.actions))
    missing.push("actions");
  if (manifest2.middleware && !(used & PipelineFeatures.middleware))
    missing.push("middleware");
  if (manifest2.i18n && manifest2.i18n.strategy !== "manual" && !(used & PipelineFeatures.i18n))
    missing.push("i18n");
  if (manifest2.cacheConfig && !(used & PipelineFeatures.cache))
    missing.push("cache");
  for (const feature of missing)
    this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless you add it to your fetch.ts pipeline.`);
}, "#warnMissingFeatures"), /**
* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
* For example,
* ```ts
* for (const cookie_ of App.getSetCookieFromResponse(response)) {
*     const cookie: string = cookie_
* }
* ```
* @param response The response to read cookies from.
* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
*/
__publicField(_a3, "getSetCookieFromResponse", getSetCookiesFromResponse), _a3);
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  let prefix = "";
  if (!assetsPrefix)
    prefix = "";
  else if (typeof assetsPrefix === "string")
    prefix = assetsPrefix;
  else
    prefix = assetsPrefix[fileExtension2.slice(1)] || assetsPrefix.fallback;
  return prefix;
}
__name(getAssetsPrefix, "getAssetsPrefix");
init_path();
var URL_PARSE_BASE = "https://astro.build";
function splitAssetPath(path) {
  const parsed = new URL(path, URL_PARSE_BASE);
  return {
    pathname: !URL.canParse(path) && !path.startsWith("/") ? parsed.pathname.slice(1) : parsed.pathname,
    suffix: `${parsed.search}${parsed.hash}`
  };
}
__name(splitAssetPath, "splitAssetPath");
function appendQueryParams(path, queryParams) {
  const queryString = queryParams.toString();
  if (!queryString)
    return path;
  const hashIndex = path.indexOf("#");
  const basePath = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  return `${basePath}${basePath.includes("?") ? "&" : "?"}${queryString}${hash}`;
}
__name(appendQueryParams, "appendQueryParams");
function createAssetLink(href, base, assetsPrefix, queryParams) {
  const { pathname, suffix } = splitAssetPath(href);
  let url = "";
  if (assetsPrefix)
    url = joinPaths(getAssetsPrefix(fileExtension(pathname), assetsPrefix), slash(pathname)) + suffix;
  else if (base)
    url = prependForwardSlash(joinPaths(base, slash(pathname))) + suffix;
  else
    url = href;
  if (queryParams)
    url = appendQueryParams(url, queryParams);
  return url;
}
__name(createAssetLink, "createAssetLink");
function createStylesheetElement(stylesheet, base, assetsPrefix, queryParams) {
  if (stylesheet.type === "inline")
    return {
      props: {},
      children: stylesheet.content
    };
  else
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix, queryParams)
      },
      children: ""
    };
}
__name(createStylesheetElement, "createStylesheetElement");
function createStylesheetElementSet(stylesheets, base, assetsPrefix, queryParams) {
  return new Set(stylesheets.map((s2) => createStylesheetElement(s2, base, assetsPrefix, queryParams)));
}
__name(createStylesheetElementSet, "createStylesheetElementSet");
function createModuleScriptElement(script, base, assetsPrefix, queryParams) {
  if (script.type === "external")
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix, queryParams);
  else
    return {
      props: { type: "module" },
      children: script.value
    };
}
__name(createModuleScriptElement, "createModuleScriptElement");
function createModuleScriptElementWithSrc(src, base, assetsPrefix, queryParams) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix, queryParams)
    },
    children: ""
  };
}
__name(createModuleScriptElementWithSrc, "createModuleScriptElementWithSrc");
init_base_pipeline();
init_redirects();
init_helpers();
init_rewrite();
init_console();
var AppPipeline = /* @__PURE__ */ __name(class AppPipeline2 extends Pipeline {
  getName() {
    return "AppPipeline";
  }
  static create({ manifest: manifest2, streaming }) {
    const resolve = /* @__PURE__ */ __name(async function resolve2(specifier) {
      if (!(specifier in manifest2.entryModules))
        throw new Error(`Unable to resolve [${specifier}]`);
      const bundlePath = manifest2.entryModules[specifier];
      if (bundlePath.startsWith("data:") || bundlePath.length === 0)
        return bundlePath;
      else
        return createAssetLink(bundlePath, manifest2.base, manifest2.assetsPrefix);
    }, "resolve2");
    const logger = createConsoleLogger({ level: manifest2.logLevel });
    return new AppPipeline2(logger, manifest2, "production", manifest2.renderers, resolve, streaming, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
  }
  async headElements(routeData) {
    const { assetsPrefix, base } = this.manifest;
    const routeInfo = this.manifest.routes.find((route) => route.routeData.route === routeData.route);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
    for (const script of routeInfo?.scripts ?? [])
      if ("stage" in script) {
        if (script.stage === "head-inline")
          scripts.add({
            props: {},
            children: script.children
          });
      } else
        scripts.add(createModuleScriptElement(script, base, assetsPrefix));
    return {
      links,
      styles,
      scripts
    };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    return (await this.getModuleForRoute(routeData)).page();
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes)
      if (route.component === defaultRoute.component)
        return { page: () => Promise.resolve(defaultRoute.instance) };
    let routeToProcess = route;
    if (routeIsRedirect(route))
      if (route.redirectRoute)
        routeToProcess = route.redirectRoute;
      else
        return RedirectSinglePageBuiltModule;
    else if (routeIsFallback(route))
      routeToProcess = getFallbackRoute(route, this.manifest.routes);
    if (this.manifest.pageMap) {
      const importComponentInstance = this.manifest.pageMap.get(routeToProcess.component);
      if (!importComponentInstance)
        throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
      return await importComponentInstance();
    } else if (this.manifest.pageModule)
      return this.manifest.pageModule;
    throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r2) => r2.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base,
      outDir: this.manifest?.serverLike ? this.manifest.buildClientDir : this.manifest.outDir
    });
    return {
      newUrl,
      pathname,
      componentInstance: await this.getComponentByRoute(routeData),
      routeData
    };
  }
}, "AppPipeline");
var App = /* @__PURE__ */ __name(class extends BaseApp {
  createPipeline(streaming) {
    return AppPipeline.create({
      manifest: this.manifest,
      streaming
    });
  }
  isDev() {
    return false;
  }
  logRequest(_options) {
  }
}, "App");
init_encryption();
init_noop_middleware();
function deserializeManifest(serializedManifest, routesList) {
  const routes = [];
  if (serializedManifest.routes)
    for (const serializedRoute of serializedManifest.routes) {
      routes.push({
        ...serializedRoute,
        routeData: deserializeRouteData(serializedRoute.routeData)
      });
      const route = serializedRoute;
      route.routeData = deserializeRouteData(serializedRoute.routeData);
    }
  if (routesList)
    for (const route of routesList?.routes)
      routes.push({
        file: "",
        links: [],
        scripts: [],
        styles: [],
        routeData: route
      });
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const key = decodeKey(serializedManifest.key);
  return {
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    rootDir: new URL(serializedManifest.rootDir),
    srcDir: new URL(serializedManifest.srcDir),
    publicDir: new URL(serializedManifest.publicDir),
    outDir: new URL(serializedManifest.outDir),
    cacheDir: new URL(serializedManifest.cacheDir),
    buildClientDir: new URL(serializedManifest.buildClientDir),
    buildServerDir: new URL(serializedManifest.buildServerDir),
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    key
  };
}
__name(deserializeManifest, "deserializeManifest");
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin,
    distURL: rawRouteData.distURL
  };
}
__name(deserializeRouteData, "deserializeRouteData");
function deserializeRouteInfo(rawRouteInfo) {
  return {
    styles: rawRouteInfo.styles,
    file: rawRouteInfo.file,
    links: rawRouteInfo.links,
    scripts: rawRouteInfo.scripts,
    routeData: deserializeRouteData(rawRouteInfo.routeData)
  };
}
__name(deserializeRouteInfo, "deserializeRouteInfo");
init_console();
async function handle(manifest2, app, request, env2, context2) {
  const { pathname } = new URL(request.url);
  const bindingName = "SESSION";
  globalThis.__env__ ??= {};
  globalThis.__env__[bindingName] = env2[bindingName];
  if (manifest2.assets.has(pathname))
    return env2.ASSETS.fetch(request.url.replace(/\.html$/, ""));
  const routeData = app.match(request);
  if (!routeData) {
    const asset = await env2.ASSETS.fetch(request.url.replace(/index.html$/, "").replace(/\.html$/, ""));
    if (asset.status !== 404)
      return asset;
  }
  Reflect.set(request, Symbol.for("astro.clientAddress"), request.headers.get("cf-connecting-ip"));
  const locals = { runtime: {
    env: env2,
    cf: request.cf,
    caches,
    ctx: {
      waitUntil: (promise) => context2.waitUntil(promise),
      passThroughOnException: () => {
        throw new Error("`passThroughOnException` is currently not available in Cloudflare Pages. See https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions.");
      },
      props: {}
    }
  } };
  const response = await app.render(request, {
    routeData,
    locals,
    prerenderedErrorPageFetch: async (url) => {
      return env2.ASSETS.fetch(url.replace(/\.html$/, ""));
    }
  });
  if (app.setCookieHeaders)
    for (const setCookieHeader of app.setCookieHeaders(response))
      response.headers.append("Set-Cookie", setCookieHeader);
  return response;
}
__name(handle, "handle");
function createExports(manifest2) {
  const app = new App(manifest2);
  const fetch2 = /* @__PURE__ */ __name(async (request, env2, context2) => {
    return await handle(manifest2, app, request, env2, context2);
  }, "fetch");
  return { default: { fetch: fetch2 } };
}
__name(createExports, "createExports");
var _virtual_astro_adapter_entrypoint_exports = /* @__PURE__ */ __exportAll({
  createExports: () => createExports,
  default: () => _virtual_astro_adapter_entrypoint_default
});
var _virtual_astro_adapter_entrypoint_default = void 0;
var renderers = [];
[{
  "file": "",
  "links": [],
  "scripts": [],
  "styles": [],
  "routeData": {
    "type": "page",
    "component": "_server-islands.astro",
    "params": ["name"],
    "segments": [[{
      "content": "_server-islands",
      "dynamic": false,
      "spread": false
    }], [{
      "content": "name",
      "dynamic": true,
      "spread": false
    }]],
    "pattern": "^\\/_server-islands\\/([^/]+?)\\/?$",
    "prerender": false,
    "isIndex": false,
    "fallbackRoutes": [],
    "route": "/_server-islands/[name]",
    "origin": "internal",
    "distURL": [],
    "_meta": { "trailingSlash": "ignore" }
  }
}].map(deserializeRouteInfo);
var pageMap = /* @__PURE__ */ new Map([]);
var noop_entrypoint_exports = /* @__PURE__ */ __exportAll({ server: () => server });
var server;
var init_noop_entrypoint = __esmMin(() => {
  server = {};
});
var init_middleware$1 = __esmMin(() => {
  init_sequence();
});
var onRequest$1;
var init_middleware = __esmMin(() => {
  onRequest$1 = /* @__PURE__ */ __name((context2, next) => {
    if (context2.isPrerendered)
      context2.locals.runtime ??= { env: process.env };
    return next();
  }, "onRequest$1");
});
var _virtual_astro_middleware_exports = /* @__PURE__ */ __exportAll({ onRequest: () => onRequest });
var onRequest;
var init__virtual_astro_middleware = __esmMin(() => {
  init_middleware$1();
  init_middleware();
  onRequest = sequence(onRequest$1);
});
function defineDriver(factory) {
  return factory;
}
__name(defineDriver, "defineDriver");
function normalizeKey(key, sep = ":") {
  if (!key)
    return "";
  return key.replace(/[:/\\]/g, sep).replace(/^[:/\\]|[:/\\]$/g, "");
}
__name(normalizeKey, "normalizeKey");
function joinKeys(...keys) {
  return keys.map((key) => normalizeKey(key)).filter(Boolean).join(":");
}
__name(joinKeys, "joinKeys");
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace)
    Error.captureStackTrace(err, createError);
  return err;
}
__name(createError, "createError");
var init_utils = __esmMin(() => {
});
function getBinding(binding2) {
  let bindingName = "[binding]";
  if (typeof binding2 === "string") {
    bindingName = binding2;
    binding2 = globalThis[bindingName] || globalThis.__env__?.[bindingName];
  }
  if (!binding2)
    throw createError("cloudflare", `Invalid binding \`${bindingName}\`: \`${binding2}\``);
  for (const key of [
    "get",
    "put",
    "delete"
  ])
    if (!(key in binding2))
      throw createError("cloudflare", `Invalid binding \`${bindingName}\`: \`${key}\` key is missing`);
  return binding2;
}
__name(getBinding, "getBinding");
function getKVBinding(binding2 = "STORAGE") {
  return getBinding(binding2);
}
__name(getKVBinding, "getKVBinding");
var init_cloudflare = __esmMin(() => {
  init_utils();
});
var DRIVER_NAME;
var cloudflare_kv_binding_default;
var init_cloudflare_kv_binding = __esmMin(() => {
  init_utils();
  init_cloudflare();
  DRIVER_NAME = "cloudflare-kv-binding";
  cloudflare_kv_binding_default = defineDriver((opts) => {
    const r2 = /* @__PURE__ */ __name((key = "") => opts.base ? joinKeys(opts.base, key) : key, "r");
    async function getKeys(base = "") {
      base = r2(base);
      const binding2 = getKVBinding(opts.binding);
      const keys = [];
      let cursor = void 0;
      do {
        const kvList = await binding2.list({
          prefix: base || void 0,
          cursor
        });
        keys.push(...kvList.keys);
        cursor = kvList.list_complete ? void 0 : kvList.cursor;
      } while (cursor);
      return keys.map((key) => key.name);
    }
    __name(getKeys, "getKeys");
    return {
      name: DRIVER_NAME,
      options: opts,
      getInstance: () => getKVBinding(opts.binding),
      async hasItem(key) {
        key = r2(key);
        return await getKVBinding(opts.binding).get(key) !== null;
      },
      getItem(key) {
        key = r2(key);
        return getKVBinding(opts.binding).get(key);
      },
      setItem(key, value, topts) {
        key = r2(key);
        return getKVBinding(opts.binding).put(key, value, topts ? {
          expirationTtl: topts?.ttl ? Math.max(topts.ttl, opts.minTTL ?? 60) : void 0,
          ...topts
        } : void 0);
      },
      removeItem(key) {
        key = r2(key);
        return getKVBinding(opts.binding).delete(key);
      },
      getKeys(base) {
        return getKeys(base).then((keys) => keys.map((key) => opts.base ? key.slice(opts.base.length) : key));
      },
      async clear(base) {
        const binding2 = getKVBinding(opts.binding);
        const keys = await getKeys(base);
        await Promise.all(keys.map((key) => binding2.delete(key)));
      }
    };
  });
});
var _virtual_astro_session_driver_exports = /* @__PURE__ */ __exportAll({ default: () => _virtual_astro_session_driver_default });
var _virtual_astro_session_driver_default;
var init__virtual_astro_session_driver = __esmMin(() => {
  init_cloudflare_kv_binding();
  init_cloudflare_kv_binding();
  _virtual_astro_session_driver_default = cloudflare_kv_binding_default;
});
var _virtual_astro_server_island_manifest_exports = /* @__PURE__ */ __exportAll({
  serverIslandMap: () => serverIslandMap,
  serverIslandNameMap: () => serverIslandNameMap
});
var serverIslandMap;
var serverIslandNameMap;
var init__virtual_astro_server_island_manifest = __esmMin(() => {
  serverIslandMap = /* @__PURE__ */ new Map([]);
  serverIslandNameMap = /* @__PURE__ */ new Map([]);
});
var _manifest = deserializeManifest({ "rootDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/", "cacheDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/node_modules/.astro/", "outDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/dist/", "srcDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/src/", "publicDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/public/", "buildClientDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/dist/", "buildServerDir": "file:///D:/Download/DS_AI/my_project/world-companies-track-app/dist/_worker.js/", "adapterName": "@astrojs/cloudflare", "assetsDir": "_astro", "routes": [{ "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "page", "component": "_server-islands.astro", "params": ["name"], "segments": [[{ "content": "_server-islands", "dynamic": false, "spread": false }], [{ "content": "name", "dynamic": true, "spread": false }]], "pattern": "^\\/_server-islands\\/([^/]+?)\\/?$", "prerender": false, "isIndex": false, "fallbackRoutes": [], "route": "/_server-islands/[name]", "origin": "internal", "distURL": [], "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/about", "isIndex": false, "type": "page", "pattern": "^\\/about\\/?$", "segments": [[{ "content": "about", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/about.astro", "pathname": "/about", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/companies/[ticker]", "isIndex": false, "type": "page", "pattern": "^\\/companies\\/([^/]+?)\\/?$", "segments": [[{ "content": "companies", "dynamic": false, "spread": false }], [{ "content": "ticker", "dynamic": true, "spread": false }]], "params": ["ticker"], "component": "src/pages/companies/[ticker].astro", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/compare", "isIndex": false, "type": "page", "pattern": "^\\/compare\\/?$", "segments": [[{ "content": "compare", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/compare.astro", "pathname": "/compare", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/countries/[countrySlug]", "isIndex": false, "type": "page", "pattern": "^\\/countries\\/([^/]+?)\\/?$", "segments": [[{ "content": "countries", "dynamic": false, "spread": false }], [{ "content": "countrySlug", "dynamic": true, "spread": false }]], "params": ["countrySlug"], "component": "src/pages/countries/[countrySlug].astro", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/countries", "isIndex": true, "type": "page", "pattern": "^\\/countries\\/?$", "segments": [[{ "content": "countries", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/countries/index.astro", "pathname": "/countries", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/etfs", "isIndex": true, "type": "page", "pattern": "^\\/etfs\\/?$", "segments": [[{ "content": "etfs", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/etfs/index.astro", "pathname": "/etfs", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/llms.txt", "isIndex": false, "type": "endpoint", "pattern": "^\\/llms\\.txt$", "segments": [[{ "content": "llms.txt", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/llms.txt.ts", "pathname": "/llms.txt", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/methodology", "isIndex": false, "type": "page", "pattern": "^\\/methodology\\/?$", "segments": [[{ "content": "methodology", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/methodology.astro", "pathname": "/methodology", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/movers", "isIndex": false, "type": "page", "pattern": "^\\/movers\\/?$", "segments": [[{ "content": "movers", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/movers.astro", "pathname": "/movers", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/privacy", "isIndex": false, "type": "page", "pattern": "^\\/privacy\\/?$", "segments": [[{ "content": "privacy", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/privacy.astro", "pathname": "/privacy", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/ranking/global", "isIndex": false, "type": "page", "pattern": "^\\/ranking\\/global\\/?$", "segments": [[{ "content": "ranking", "dynamic": false, "spread": false }], [{ "content": "global", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/ranking/global.astro", "pathname": "/ranking/global", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/robots.txt", "isIndex": false, "type": "endpoint", "pattern": "^\\/robots\\.txt$", "segments": [[{ "content": "robots.txt", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/robots.txt.ts", "pathname": "/robots.txt", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/sectors/[sectorSlug]", "isIndex": false, "type": "page", "pattern": "^\\/sectors\\/([^/]+?)\\/?$", "segments": [[{ "content": "sectors", "dynamic": false, "spread": false }], [{ "content": "sectorSlug", "dynamic": true, "spread": false }]], "params": ["sectorSlug"], "component": "src/pages/sectors/[sectorSlug].astro", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/sectors", "isIndex": true, "type": "page", "pattern": "^\\/sectors\\/?$", "segments": [[{ "content": "sectors", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/sectors/index.astro", "pathname": "/sectors", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/terms", "isIndex": false, "type": "page", "pattern": "^\\/terms\\/?$", "segments": [[{ "content": "terms", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/terms.astro", "pathname": "/terms", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/watchlist", "isIndex": false, "type": "page", "pattern": "^\\/watchlist\\/?$", "segments": [[{ "content": "watchlist", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/watchlist.astro", "pathname": "/watchlist", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }], "serverLike": true, "middlewareMode": "classic", "site": "https://worldcompaniesmarketcap.com", "base": "/", "trailingSlash": "ignore", "compressHTML": "jsx", "componentMetadata": [["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/about.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/companies/[ticker].astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/compare.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/countries/[countrySlug].astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/countries/index.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/etfs/index.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/index.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/methodology.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/movers.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/privacy.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/ranking/global.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/sectors/[sectorSlug].astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/sectors/index.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/terms.astro", { "propagation": "none", "containsHead": true }], ["D:/Download/DS_AI/my_project/world-companies-track-app/src/pages/watchlist.astro", { "propagation": "none", "containsHead": true }]], "renderers": [], "clientDirectives": [["idle", '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();']], "entryModules": { "astro/entrypoints/prerender": "prerender-entry.BemUp2WV.mjs", "\0virtual:astro:page:src/pages/countries/[countrySlug]@_@astro": "chunks/_countrySlug__C9hfv-NE.mjs", "\0virtual:astro:page:src/pages/sectors/[sectorSlug]@_@astro": "chunks/_sectorSlug__qOiLdFV8.mjs", "\0virtual:astro:page:src/pages/companies/[ticker]@_@astro": "chunks/_ticker__DPVYTtyr.mjs", "\0virtual:astro:middleware": "chunks/_virtual_astro_middleware_BZg3SCEr.mjs", "\0virtual:astro:server-island-manifest": "chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs", "\0virtual:astro:session-driver": "chunks/_virtual_astro_session-driver_C3yx0njK.mjs", "\0virtual:astro:page:src/pages/about@_@astro": "chunks/about_BosQA2Nc.mjs", "\0virtual:astro:page:src/pages/compare@_@astro": "chunks/compare_DXaPmFRQ.mjs", "\0virtual:astro:page:src/pages/ranking/global@_@astro": "chunks/global_CDEcJVpL.mjs", "\0virtual:astro:page:src/pages/etfs/index@_@astro": "chunks/index_CUCw3Foc.mjs", "\0virtual:astro:page:src/pages/index@_@astro": "chunks/index_HNdaJEx1.mjs", "\0virtual:astro:page:src/pages/sectors/index@_@astro": "chunks/index_f4qWzH5f.mjs", "\0virtual:astro:page:src/pages/countries/index@_@astro": "chunks/index_zt2Jppi3.mjs", "\0virtual:astro:page:src/pages/llms.txt@_@ts": "chunks/llms_BiwcJDEe.mjs", "\0virtual:astro:page:src/pages/methodology@_@astro": "chunks/methodology_D7T3R5Qf.mjs", "\0virtual:astro:page:src/pages/movers@_@astro": "chunks/movers_BoL5kMJf.mjs", "\0virtual:astro:actions/noop-entrypoint": "chunks/noop-entrypoint_Z3zFhrGC.mjs", "\0virtual:astro:page:src/pages/privacy@_@astro": "chunks/privacy_CIUZpOKL.mjs", "\0virtual:astro:page:src/pages/robots.txt@_@ts": "chunks/robots_f6ocCihq.mjs", "\0virtual:astro:page:src/pages/terms@_@astro": "chunks/terms_eLB2iquk.mjs", "D:/Download/DS_AI/my_project/world-companies-track-app/node_modules/@astrojs/react/dist/vnode-children.js": "chunks/vnode-children_B6vVcKTz.mjs", "\0virtual:astro:page:src/pages/watchlist@_@astro": "chunks/watchlist_1aFMEK_z.mjs", "virtual:astro:legacy-ssr-entry": "index.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/CommandPalette.tsx": "_astro/CommandPalette.BifWKijX.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/CompanyLogo.tsx": "_astro/CompanyLogo.Dpv4PIVw.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/ComparePage.tsx": "_astro/ComparePage.CTHaFCe4.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/CurrencySwitcher.tsx": "_astro/CurrencySwitcher.2hDNwf75.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/MoversPage.tsx": "_astro/MoversPage.Bs6pB8nJ.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/RankingTable.tsx": "_astro/RankingTable.gFBj9peN.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/SectorTreemap.tsx": "_astro/SectorTreemap.B-P_qn8e.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/ThemeToggle.tsx": "_astro/ThemeToggle.CJgEk3sF.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/WatchlistButton.tsx": "_astro/WatchlistButton.Dr6bW0p1.js", "D:/Download/DS_AI/my_project/world-companies-track-app/src/components/react/WatchlistPage.tsx": "_astro/WatchlistPage.DHPbHQ-K.js", "@astrojs/react/client.js": "_astro/client.Co80XdjY.js", "astro:scripts/before-hydration.js": "" }, "inlinedScripts": [], "assets": ["/favicon.ico", "/favicon.svg", "/_astro/client.Co80XdjY.js", "/_astro/CommandPalette.BifWKijX.js", "/_astro/CompanyLogo.Dpv4PIVw.js", "/_astro/ComparePage.CTHaFCe4.js", "/_astro/currency.BgtQWlG3.js", "/_astro/CurrencySwitcher.2hDNwf75.js", "/_astro/format.Bkc9DM-T.js", "/_astro/jsx-runtime.9PtqGMT8.js", "/_astro/metrics.BAsdYzqf.js", "/_astro/MoversPage.Bs6pB8nJ.js", "/_astro/RankingTable.gFBj9peN.js", "/_astro/react.CYuo-Lgd.js", "/_astro/SectorTreemap.B-P_qn8e.js", "/_astro/ThemeToggle.CJgEk3sF.js", "/_astro/watchlist.DSwzSnIi.js", "/_astro/WatchlistButton.Dr6bW0p1.js", "/_astro/WatchlistPage.DHPbHQ-K.js", "/_worker.js/index.js", "/_astro/DataDisclaimer.BIhCe1cW.css", "/about/index.html", "/compare/index.html", "/countries/index.html", "/etfs/index.html", "/llms.txt", "/methodology/index.html", "/movers/index.html", "/privacy/index.html", "/ranking/global/index.html", "/robots.txt", "/sectors/index.html", "/terms/index.html", "/watchlist/index.html", "/index.html"], "buildFormat": "directory", "checkOrigin": true, "actionBodySizeLimit": 1048576, "serverIslandBodySizeLimit": 1048576, "allowedDomains": [], "key": "QiTME2SwevKGwFgbl00v9ozWTJSkklppq5LbENdt+IA=", "sessionConfig": { "driver": "unstorage/drivers/cloudflare-kv-binding" }, "image": {}, "devToolbar": { "enabled": false, "debugInfoOutput": "" }, "logLevel": "info", "shouldInjectCspMetaTags": false });
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
  renderers,
  actions: () => Promise.resolve().then(() => (init_noop_entrypoint(), noop_entrypoint_exports)),
  middleware: () => Promise.resolve().then(() => (init__virtual_astro_middleware(), _virtual_astro_middleware_exports)),
  sessionDriver: () => Promise.resolve().then(() => (init__virtual_astro_session_driver(), _virtual_astro_session_driver_exports)),
  serverIslandMappings: () => Promise.resolve().then(() => (init__virtual_astro_server_island_manifest(), _virtual_astro_server_island_manifest_exports)),
  routes: manifestRoutes,
  pageMap
});
var _exports = createExports?.(manifest, void 0) || _virtual_astro_adapter_entrypoint_exports;
var _start = "start";
if (Object.prototype.hasOwnProperty.call(_virtual_astro_adapter_entrypoint_exports, _start))
  _virtual_astro_adapter_entrypoint_exports[_start](manifest, void 0);
var _virtual_astro_legacy_ssr_entry_default = _exports.default;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e2) {
    const error4 = reduceError(e2);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-HMAGxw/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = _virtual_astro_legacy_ssr_entry_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-HMAGxw/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/**
* shortdash - https://github.com/bibig/node-shorthash
*
* @license
*
* (The MIT License)
*
* Copyright (c) 2013 Bibig <bibig@me.com>
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/
//# sourceMappingURL=index.js.map
