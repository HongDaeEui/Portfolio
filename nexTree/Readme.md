## 🔗 2021 Hdac Technology Competition - NFT를 활용한 서비스 모델 개발

### 프로젝트 개요

![image](https://user-images.githubusercontent.com/43264739/143892863-55c20310-d507-4cfe-84be-9ecb6f3b57e8.png)

+ 프로젝트 과정 : 2021 혁신성장 청년인재 양성사업, 블록체인을 활용한 비즈니스 모델 개발
+ 프로젝트 명 : NFT 기반 친환경 묘목기부 & 아트 프로젝트, nexTree
+ 프로젝트 기간 : 21.08.25 ~ 21.09.27
+ 구현 목표 :
NFT를 활용한 묘목기부 플랫폼의 사이트 기획 및 콘텐츠 구현
### 프로젝트 설명
#### 1. 서비스 설명
기부에 참여하는 누구나 기본적으로 나무카드를 지급받으며, 나무 카드는 동일 등급의 카드와의 합성을 통해 상위등급의 카드를 보유 할 수 있습니다. 또한 일정량 나무 기부를 하게 되면 교환이 가능한 아티스트들의 NFT를 뽑을 수 있는 뽑기권이 주어지게 됩니다. 이를 통해 사용자는 나만의 나무 카드를 모으면서, 기부할수록 자신만이 보유하는 아트 NFT도 얻게되면서 기부에 참여함으로써 보람과 흥미를 동시에 챙길 수 있게됩니다.

#### 2. 현황(문제점)
- 지역별 공공기관 및 기업 주도 캠페인 형식 나무 기부 참여의 한계
- 환경문제 대한 심각성 인식 증가 대비 실천 부족

#### 3. 블록체인 기술을 통해 해결하고자 하는 과제
- 나무 카드 수집과 NFT 아트 수집을 통한 지속 가능한 나무 기부 모델
- 블록체인 네트워크를 통한 투명성과 신뢰성 보장
- 보유 나무 카드 등급을 통한 손쉬운 환경기여활동 참여 증명


### 팀원 소개
#### 팀명 : 데우스

##### 팀원/홍대의
+ 담당역할 : 기획, 프론트엔드, 컨트랙트 개발
+ 업무내용 : 기획 아이디어 제시하고, 웹 사이트 디자인 및 프레임 설계하고, 컨트랙트 개발함
+ 사용툴 : Vue.js, HTML, CSS, BootStrap5, Web3.js, Solidity, Remix IDE 
##### 팀원/김의천
+ 담당역할 : 개발 총괄, 프론트엔드, 백엔드, 컨트랙트 개발
+ 업무내용 : 팀원들이 개발한 내용이 잘 맞춰질 수 있도록 개발 방향성을 이끌어감
+ 사용툴 : Vue.js, HTML, CSS, BootStrap5, Web3.js, DB/MySQL, Server/Node.js, Express
##### 팀원/정재승
+ 담당역할 : 기획, 프론트엔드, 컨트랙트 개발
+ 업무내용 : 기획 아이디어 제시하고, 나무 카드 디자인과 웹 사이트 디자인 및 프레임 설계
+ 사용툴 : Vue.js, HTML, CSS, BootStrap5, Web3.js, Solidity, Remix IDE, Figma
##### 팀원/최재람
+ 담당역할 : 기획, 프론트엔드
+ 업무내용 : 팀원들의 개발 보조하고, 기획 및 산출물 작성 관리
+ 사용툴 : Vue.js, HTML, CSS, BootStrap5

---------------------

### 어플리케이션 실행 환경 
- Frontend : Vue.js, HTML, CSS, BootStrap5, Web3.js
- Backend : DB/MySQL, Server/Node.js, Express, IPFS

### 프로젝트 개발시연 영상
https://www.youtube.com/watch?v=6-mYKdrZWbQ

### 비즈니스 모델

![image](https://user-images.githubusercontent.com/43264739/143893050-6b3a6051-9d9b-47c5-ab8c-4f584bb78cf6.png)

후원자로부터 받은 후원금의 15%가 NexTree를 운영하는데 필요한 자금으로 사용되고, 후원금의 70%가 전부 묘목기부에 사용됩니다. 묘묙의 구매부터 관련 단체와의 협력에 필요한 비용까지 충당되고, 추후에 보고서 작성을 위한 정보 재공 비용또한 포함시켜 비용을 산정합니다. 나머지 15%는 나무카드가 아닌, 뽑기를 통해 얻을 수 있는 아트 NFT 창작 아티스트들에게 전달된다. 이로서 후원자는 자연 생태계와 예술 생태계에 모두 기여를 할 수 있게 되고, NFT라는 보상을 받아가게 됩니다.

### 개발 일정

![image](https://user-images.githubusercontent.com/43264739/143894286-c5790549-185c-460e-bd6b-77e412dc30fc.png)

### 사이트맵

![image](https://user-images.githubusercontent.com/43264739/143894373-b5f9ddbb-119b-47b9-a85e-dd2e9381c452.png)

### 스마트 컨트랙트 워크플로우

![image](https://user-images.githubusercontent.com/43264739/143894459-ad44782c-181a-400c-a9a6-21bd7c4094af.png)

### 핵심 컨트랙트 코드

#### 1. 나무 기부
사용자가 후원을 진행하게 되면 사용하는 Donate는 후원한 만큼의 ETH를 받는 역할을 합니다.
함수에 설계된 조건에 따라, 후원 액수에 걸맞는 등급의 나무 카드가 지급되도록 하였고, 일정량 이상 후원에 참여시, 친환경 아티스트의 NFT 작품을 얻을 수 있는 뽑기권이 지급됩니다. 또한 후원을 진행할 때 해당 후원의 메모를 남기고 싶거나, 본인의 이름을 기록하고 싶은 사용자는 전송하는 ETH와 함께 String 형식의 데이터를 같이 전송하여 컨트랙트 상에 기록할 수 있습니다. 이름과 후원 액수는 계정 별로 컨트랙트 상에 매핑되기 때문에 추후에 손쉽게 조회가 가능합니다.  

![image](https://user-images.githubusercontent.com/43264739/143894702-e0890062-3b95-4f1c-9aaa-77e2597b62fa.png)
![image](https://user-images.githubusercontent.com/43264739/143894740-06e06f03-3d2c-4c61-b7b7-d959310ea1fb.png)

#### 2.	후원 이력 조회

![image](https://user-images.githubusercontent.com/43264739/143894832-c900671b-f1a3-4541-b1c0-b1f517aeb652.png)

#### 3. 난수사용(체인링크 VRF)
후원을 통해 획득한 뽑기권을 사용하게되면 우선 뽑기 진행을 위해 난수생성을 요청하게 됩니다. 이 과정에서 체인링크의 VRF를 사용하게 되므로 서명을 진행한 후 대략 4분의 시간이 지나면 신뢰할 수 있는 난수값을 획득하게 됩니다. fullfillRandomness 에서는 난수의 범위와 난수 생성의 조건을 설정할 수 있고, 중복으로 난수가 생성되는 되는것을 방지합니다. 난수 생성이 완료되면 getmyRandomKey를 통해 생성된 난수값을 확인할 수 있습니다.

![image](https://user-images.githubusercontent.com/43264739/143895030-72ed4c6d-796f-4fff-9f6d-53267fbc3f18.png)
![image](https://user-images.githubusercontent.com/43264739/143895068-98e49691-9da1-449b-a158-f51f4127742f.png)
![image](https://user-images.githubusercontent.com/43264739/143895145-cf4de69a-025f-4b60-bfb8-ecc31b91853f.png)

#### 4. 뽑기
사전에 설정된 Prize_Box에 뽑기로 획득할 아트 NFT를 담아 놓고, 이전의 난수 생성부분을 성공적으로 마치게 되면, draw를 통해 획득한 난수에 따른 뽑기 경품을 획득할 수 있습니다. 위 코드는 개발과정에서 테스트를 진행한 코드로 난수가 25를 기준으로 25가 넘는 수를 생성했을시 경품을 획득하도록 설계된 코드입니다.

![image](https://user-images.githubusercontent.com/43264739/143895305-dd8dcb3b-7714-41b8-ac9f-d92d9e7fa804.png)

#### 5. 랭크 올리기
후원을 진행하면 받게되는 기본 나무 카드를 보다 상위의 등급으로 랭크업 할 수 있는 기능입니다. 하위 등급의 카드 10개를 재료로 소모하여, 상위 등급의 카드 1개로 돌려받고, 소모된 재료 카드는 소각의 개념이 아니고 다시 NexTree로 반환되는 개념입니다.

![image](https://user-images.githubusercontent.com/43264739/143895392-b3c6233f-6f78-4de8-a3b5-bbe6b3361620.png)

#### 6. 아트 NFT 발행
친화경 아티스트들이 아트 NFT를 추가로 제작하였을 경우 컨트랙트 상에서 발급할 수 있습니다.

![image](https://user-images.githubusercontent.com/43264739/143895487-4b0560e7-0020-46ac-b33d-8df44f653b53.png)

#### 7. 이벤트 설정
이벤트 기부를 진행할 경우 해당 이벤트에 대한 ID 값을 부여하게 되는데 이벤트의 종료, 또는 다른 이벤트가 시작될 경우 이벤트 설정을 통해 ID값을 변경할 수 있습니다.

![image](https://user-images.githubusercontent.com/43264739/143895577-dc21b354-1301-449b-9d97-fc7ad5286697.png)

#### 8. 이벤트 NFT 발행
이벤트 기부가 진행될때 이벤트 기부에 대한 보상으로 주어지는 이벤트 NFT를 발행합니다.

![image](https://user-images.githubusercontent.com/43264739/143895675-f4123b26-ff4d-40d8-9d9c-3b624d8ee4f7.png)

#### 9. 이벤트 기부
상시 기부와 달리 이벤트 기부를 진행할 경우 이벤트에 대한 후원을 별도로 진행해야하므로 이벤트에 대한 Donate 기능을 하고, 앞서 설정한 이벤트 NFT를 지급하는 기능을 합니다.

![image](https://user-images.githubusercontent.com/43264739/143895744-1592b5db-e383-4bbb-95cf-74901690e3ed.png)


