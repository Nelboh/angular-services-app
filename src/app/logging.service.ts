export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status has changed. New status: ' + status);
    }
}