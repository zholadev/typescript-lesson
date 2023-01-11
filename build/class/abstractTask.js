"use strict";
class LoggerSecondary {
    printDate(date) {
        this.log(date.toString());
    }
}
class GetLog extends LoggerSecondary {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new GetLog();
logger.logWithDate('zholadev');
//# sourceMappingURL=abstractTask.js.map