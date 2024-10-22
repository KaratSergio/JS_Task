// скрипт для виводу результатів Console на сторінку

(() => {
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;

  const consoleOutput = document.getElementById('console-output');

  if (consoleOutput) {
    function addMessage(type, ...args) {
      const msg = document.createElement('div');

      const formattedArgs = args.map(arg => {
        if (arg instanceof Set) {
          return `Set { ${[...arg].join(', ')} }`;
        } else if (arg instanceof Map) {
          return `Map { ${[...arg]
            .map(([key, value]) => `${key} => ${value}`)
            .join(', ')} }`;
        } else if (Array.isArray(arg)) {
          return `Array [ ${arg.join(', ')} ]`;
        } else if (typeof arg === 'object' && arg !== null) {
          return `Object ${JSON.stringify(arg, null, 2)}`;
        } else if (typeof arg === 'string') {
          return `"${arg}"`;
        } else if (arg === null) {
          return 'null';
        } else if (arg === undefined) {
          return 'undefined';
        } else {
          return String(arg);
        }
      });

      msg.textContent = `[${type}] ${formattedArgs.join(' ')}`;
      consoleOutput.appendChild(msg);
    }

    console.log = function (...args) {
      originalLog.apply(console, args);
      addMessage('LOG', ...args);
    };

    console.warn = function (...args) {
      originalWarn.apply(console, args);
      addMessage('WARN', ...args);
    };

    console.error = function (...args) {
      originalError.apply(console, args);
      addMessage('ERROR', ...args);
    };

    window.onerror = function (msg, url, lineNo, columnNo, error) {
      const message = `${msg} at ${url}:${lineNo}:${columnNo}`;
      addMessage('ERROR', message);
      return false;
    };
  }
})();
