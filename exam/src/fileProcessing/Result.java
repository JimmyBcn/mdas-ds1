package fileProcessing;

public class Result {
    private int n_errors;
    private String report;

    public Result(int n_errors, String report) {
        this.n_errors = n_errors;
        this.report = report;
    }

    public boolean didItPass() {
        return n_errors == 0;
    }

    public void addError() {
        n_errors++;
    }

    public void appendLineReport(String line) {
        this.report += "\n"+line;
    }

    public int getErrorNumber() {
        return n_errors;
    }

    public String getReport() {
        return report;
    }
}
