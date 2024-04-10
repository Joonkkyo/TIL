package extends1.super2;

public class ClassC extends ClassB {
    public ClassC() {
        super(10, 20); // 기본 생성자가 없는 경우는 무조건 부모 생성자 호출해야 함
        System.out.println("ClassC 생성자");
    }

}
