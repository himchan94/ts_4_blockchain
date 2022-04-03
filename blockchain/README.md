# 블록체인

### 블록체인이란

- 중계자 없음 -> 개인과 개인이 거래한다는 것이 기본 철학
- 블록 체인도 데이터베이스다.
- 일반적인 데이터베이스는 저장,수정,삭제가 가능하지만, 블록체인에서는 저장만 가능 (**수정, 삭제 불가능**)
  ex) 투표시스템 : 일반DB 는 데이터 수정, 삭제가 가능함, 블록체인은 투표 결과 **수정, 삭제가 불가능**

**일반 DB는 정보가 바로 저장되지만, 블록체인 데이터는 시간이 한참 지난 후에 저장됨 (실시간 불가능)**
**결과를 수정할 수 있을 지, 없는 지를 기준으로 블록체인 결정여부 적용**

장점 : 시간 절약, 비용 절감, 위험 감소, 신뢰 확산

블록체인은 : OS
암호화폐 등등.. : 어플리케이션

블록체인거래소는 비밀번호(거래소) -> 전자지갑주소(사용자) 순으로 만듬
비밀번호는 거래소 일반 DB에 적용되어있음

블록체인에 개인정보를 저장하면 안됨;
개인이 비용을 부담.
비트코인 10분에 생성, 그 이유는 전세계 사람들이 통신하는데 딜레이가 있기 때문임. 그래서 전세계 사람들이 통신하는 시간을
기준으로 10분에 하나씩 비트코인을 생성 -> 그래서 블록체인은 실시간이 될 수 없음

#### 요약

- 블록체인은 모든 거래 정보를 포함하는 거대한 장부로서, 여러 채굴자의 컴퓨터에 분산되어 관리되는 분산 장부
- 블록은 다수의 거래 정보의 묶음이며, 이런 블록이 체인처럼 연결되어 전체 블록체인을 형성함
- 채굴은 블록에 담긴 거래 정보를 유요한 것으로 확정시키기 위해 어떤 숫자값을 찾아내는 작업 증명(Proof of Work)과 그에 따른 보상을 함친 개념
- 작업 증명의 난이도는 블록체인 전체에 걸쳐 일률적으로 적용되는 것이 아니라 채굴자 컴퓨터의 계산 능력에 따라 다르게 적용됨
- 비트코인은 블록체인 시스템을 암호화 화폐에 적용한 서비스의 일종임

블록체인 서비스 개발을 필요한 부분들

**암호학**
**네트워크**
**웹-앱 서비스 개발기술**

### 블록체인의 특징

- 익명성 : 50% 정도의 익명성을 보장함
- 은행 같은 경우 계좌 개설을 위해
  은행 방문 -> 신분증 제출 -> 신분 확인 -> 계좌 개설 : 등록 절차가 필요함

비트코인 블록체인

- 계좌 개설하는 절차가 필요 없음
- 계좌를 생성(주소 생성)
- 원래 존재했었던 계좌(룰에 의해 정의되어 있는) 중에 하나를 사용함
- 수많은 계좌 중에 하나를 골라서 사용함