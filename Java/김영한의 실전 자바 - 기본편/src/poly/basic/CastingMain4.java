package poly.basic;

// 다운캐스팅을 자동으로 하지 않는 이유

public class CastingMain4 {
    public static void main(String[] args) {
        Parent parent1 = new Child();
        Child child1 = (Child) parent1;
        child1.childMethod();

        Parent parent2 = new Parent();
        Child child2 = (Child) parent2; // 오류, 메모리상에 Child가 존재하지 않기 때문
        child2.childMethod(); // 실행 불가  
    }
}
