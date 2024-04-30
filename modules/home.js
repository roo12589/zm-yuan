module.exports = {
    greetingPrefix: 'Hello',
    main() {
        /* e.g. "Hello, AutoJs6 6.4.1" */
        toastLog(`${this.greetingPrefix}, ${context.getString(R.strings.app_name)} ${app.autojs.versionName}`);
        
    },
};