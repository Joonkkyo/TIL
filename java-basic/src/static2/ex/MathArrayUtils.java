package static2.ex;

public class MathArrayUtils {
    private MathArrayUtils() {
        // private로 생성자를 선언하여 인스턴스 생성을 막는다.
    }
    public static int sum(int[] values) {
        int total = 0;
        for (int value : values) {
            total += value;
        }
        return total;
    }

    public static double average(int[] values) {
        return (double) sum(values) / values.length;
    }

    public static int min(int[] values) {
        int minVal = values[0];
        for (int value : values) {
            if (minVal > value) {
                minVal = value;
            }
        }

        return minVal;
    }

    public static int max(int[] values) {
        int maxVal = values[0];
        for (int value : values) {
            if (maxVal < value) {
                maxVal = value;
            }
        }

        return maxVal;
    }
}
