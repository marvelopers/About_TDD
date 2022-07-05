# About_TDD

TDD : 테스트 주도 개발

software test
목표 플랫폼 환경

### Why use Test

- 기능 정상 동작
- 요구사항 만족
- 이슈에 대해 예측 가능
- 빠른 버그 발견 가능
- 자신감 있는 리팩토링 가능
- 손쉬운 유지보수
- 코드의 품질 향상
- 코드간의 의존성을 낮춤
- 문서화
- 시간 절약

### when use TDD

1. 요구사항이 명확할 때
2. 비즈니스 로직일 경우
3. 협업 시 문서가 중요할 경우
4. 설계에 대한 고민이 필요한 경우

### test 피라미드

E2E test : end-to-end, UI 테스트, 사용자 테스트<br/>
integration test : 통합 테스트<br/>
unit test : 단위 테스트

### 좋은 테스트의 구조

1. 준비 : 준비 과정을 재사용
2. 실행 : 의도적으로 실패하기
3. 검증 : 가장 마지막에 실행

### 좋은 테스트의 원칙 - FIRST

- Fast : 느린 것(파일, DB, 네트워크)에 대한 의존성 낮추기
- Isolated: 최소한의 유닛으로 검증하기, 독립적이고 집중할 수 있도록
- Repeatable: 실행할 때마다 동일한 결과 유지
- Self-validating: 스스로 결과를 검증하기, 자동화를 통한 검증
- Timely: 사용자에게 배포되기 전에 테스트 코드 작성

### 테스트의 범위 - Right-BICEP

- 모든 요구사항이 정상 동작하는지 확인해야 함
  - Boundary conditions : 모든 코너 케이스에 대해 테스크를 실행
  - Inverse relationship : 역관계를 적용해서 결과값 확인
  - Cross check : 다른 수단을 이용해서 결과값이 맞는지 확인
  - Error conditions : 에러 핸들링이 되어 있는지 확인
  - Performance characteristics : 테스트를 통해 정확한 수치로 성능을 확인

### 좋은 테스트의 커버리지

- Conformance : 특정 포맷을 준수하는가
- Ordering : 순서조건 확인
- Range : 숫자의 범위
- Reference : 외부 의존성 유무, 특정한 조건의 유무
- Existence : 값이 존재하지 않을 떄 어떻게 동작하는가
- Cardinality : 0-1-N 법칙에 따라 검증
- Time : 상대, 절대, 동시의 일들
