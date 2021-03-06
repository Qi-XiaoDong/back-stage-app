import Vue from "vue";
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  RadioGroup,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Pagination,
  Loading,
  Dialog,
  Select,
  DatePicker,
  Option,
  MessageBox,
  Message
} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dropdown);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(RadioGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Option);
Vue.component(Message.name, Message);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
