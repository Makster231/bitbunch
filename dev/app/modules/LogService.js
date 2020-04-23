const logger = (level, namespace, message) => {
    switch(level) {
      case 'error':
        console.error(namespace + " " + message);
        break
      case 'warning':
        console.warn(namespace + " " + message);
        break
      case 'info':
        console.debug(namespace + " " + message);
        break
      case 'log':
        console.log(namespace + " " + message);
        break  
      default:
        break
    }
    console.timeStamp("ES " + namespace + " " + message);
};

export const info = logger.bind(null, 'info');
export const log = logger.bind(null, 'log');
export const warning = logger.bind(null, 'warning');
export const error = logger.bind(null, 'error');
