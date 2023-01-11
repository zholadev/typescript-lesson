abstract class LoggerSecondary {
    abstract log(message: string): void

    printDate(date: Date) {
        this.log(date.toString());
    }
}

class GetLog extends LoggerSecondary {
    log(message: string): void {
        console.log(message)
    }

    logWithDate (message: string) {
        this.printDate(new Date())
        this.log(message)
    }
}

const logger = new GetLog()

logger.logWithDate('zholadev')
