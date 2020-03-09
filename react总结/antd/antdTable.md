## 			antd-Table

1. **接下来所讲，会根据一个例子所讲。若需详细了解**  官网： https://ant.design/docs/react/use-with-create-react-app-cn 

2. ```jsx
   // antd  中 Table 的 简单使用
   // 首先  建立  Table  的  columns（列） 的属性值
   //  columns 的结构，如下：
   //   	title:  	该列的名字（即 列首 所显示的文字）
   //		dataIndex:	表示只要 dataSource 数组中的元素的属性名 与 dataIndex 值相同，属性值就会在该列显示
   const columns = [
     {
       title: 'Name',
       dataIndex: 'name',
     },
     {
       title: 'Age',
       dataIndex: 'age',
     },
     {
       title: 'Address',
       dataIndex: 'address',
     },
   ];
   const data = [
     {
       key: '1',
       name: 'John Brown',
       age: 32,
       address: 'New York No. 1 Lake Park',
     },
     {
       key: '2',
       name: 'Jim Green',
       age: 42,
       address: 'London No. 1 Lake Park',
     },
     {
       key: '3',
       name: 'Joe Black',
       age: 32,
       address: 'Sidney No. 1 Lake Park',
     },
   ];
   //  在 Table 中使用
   <Table columns={columns} dataSource={data} size="middle" />
   
   //  columns 中使用 dataIndex  对应数据  的缺陷
   //  虽然 有了  dataIndex  可以自动 匹配到所需的 dataSource 中的数据
   //  但 只是单纯的 将  dataSoruce 中的数据显示在 本列而已
   ```

3. **进阶版  Table**

   1. **如果不想只是单纯的显示 dataSource 中的数据**

      -  可以将  columns 中的  dataIndex 属性去除，替换成  render方法

      - 该 render 方法接收 两个参数： record  、 text  ，record  和  text 的值差不多，不过是显示的格式的不同，一般只会  用 record 。 record： dataSource 数组中的每一项  内容

      - 使用 render 方法，他就会将 dataSource 数组中每一项都以  record  的形式返回给你使用

      - 所以  如果 原先  dataIndex 的值是  'name'，而使用 record 就是：

        ```jsx
          {
            title: 'Name',T
            render: (record,text)=>{
            	return  record.name
            }
          },
        ```

      - **当我需要每一列显示的内容都是一样的**

        - 必须使用 render 方法，且 render 方法中  返回单一的内容就可以了。不要返回可变的
        - 像上述的  record 就是可变的，是针对每一项的（每一项的数据又是不一样的）
        - **这里  提及 显示一样的内容的原因**
          - **按理说有一项应该是  操作  列，所以该列的  按钮 都应该一样。如： 增删改查 按钮**

   2. **列头的统一处理**

      1. 列头 是 columns 数组 对象元素中的 title 属性的值

      2. 一般数据都是通过请求获得，而请求获得的 数据  每一项大致如下：

         ```js
         {
         	amount: 111
         	author: "李明"
         	createAt: 1576420203652   // 这里是时间戳
         	id: "51000019810314563X"
         	title: "七情万"
         }
         ```

      3. 上述的 每一项数据 都可以形成一列，要看你  columns 中   有没有要求显示

         - 获取数据项的 键名：

           ```jsx
             const columnKeys = Object.keys(resp.list[0])
             // resp.list  返回的数据
           ```

           

      4. 但每一列 ，我们想要的 是，例如：   ID、标题、 作者、阅读量、、时间。我们可以

         ```jsx
         const tittleDisplayMap = {
           id:'id',
           title:'标题',
           author:'作者',
           createAt:'创建时间',
           amount:'阅读量'
         }
         // 在建立  columns 时，就可以
          createColumns = (columnKeys)=>{
               const columns = columnKeys.map(item=>{
         		return{
                     title:tittleDisplayMap[item],
                   	dataIndex:item,
                     key:item,
                 }
         
         ```

      5. 当然 也可以在 key 的 map 方法中，使用 if 筛选 key，适当的使用  render 显示数据。如下

         ```jsx
         createColumns = (columnKeys)=>{
             // columnKeys  请求数据过来的 键名数组。在上述的 列头的统一处理 第一段代码块 中有显示
               const columns = columnKeys.map(item=>{
                 if(item === 'amount'){
                   return{
                     title:tittleDisplayMap[item],
                     key:item,
                     // dataIndex:'createAt',
                     render:(record,text)=>{
                       return  <Tag color={record.amount>180?'red':'green'} >{record.amount}</Tag>
                     }
                   }
                 }
                 if(item === 'createAt'){
                   return{ 
                     title:tittleDisplayMap[item],
                     key:item,
                     render : (record)=>{
                       return moment(record.createAt).format('YYYY/MM/DD  hh:mm')
                     }
                   }
                 }
                 return{
                   title:tittleDisplayMap[item],
                   dataIndex:item,
                   key:item,
                 }
               })
               columns.push({
                 title:'操作',
                 key:'action',
                 render:(record)=>{
                   return (
                     <ButtonGroup>
                       <Button size='small' type="primary" onClick=											{this.toEdit.bind(this,record.id)} > 编辑</Button>
                       <Button size="small" type="danger" onClick=											{this.showDeleteArticleModal.bind(this,record)}> 删除</Button>
                     </ButtonGroup>
                   )
                 }
               })
               return columns
             }
         ```

   3. **对于每一行的  操作按钮，如何定位是 哪一行**

      1. 定位至 哪一行，那就 必须在  columns 中，使用 **render 方法** 显示 操作按钮

      2. 因为  render 方法中有每一项的 数据，必然也有 id，将 id 传给  onClick 方法，使用如下

         ```jsx
          render:(record)=>{
                   return (
                     <ButtonGroup>
                       <Button size='small' type="primary" onClick=											{this.toEdit.bind(this,record.id)} > 编辑</Button>
                       <Button size="small" type="danger" onClick=											{this.showDeleteArticleModal.bind(this,record)}> 删除</Button>
                     </ButtonGroup>
                   )	
                 }
         ```

      3. **注意： 想要获得   record 数据，就必须在 render 的 return 语句中。而 onClick 事件只接方法名，故就无法将  record.id 传给方法**，所以就  **必须如上 的写法  接收参数**

