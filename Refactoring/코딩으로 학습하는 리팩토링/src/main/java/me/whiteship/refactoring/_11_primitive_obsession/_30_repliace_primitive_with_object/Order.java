package me.whiteship.refactoring._11_primitive_obsession._30_repliace_primitive_with_object;

public class Order {
    private Priority priority;

    public Order(String priorityValue) { // 허용 범위 추가 type safety 보장
        this(new Priority(priorityValue));
    }

    public Order(Priority priority) {
        this.priority = priority;
    }

    public Priority getPriority() {
        return priority;
    }
}
