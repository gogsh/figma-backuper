const authBlock = '[class^="auth"]'; // форма аутентификации
const authFieldLogin = 'input[type=email]'; // форма аутентификации, поле логина
const authFieldPassword = 'input[type=password]'; // форма аутентификации, поле пароля
const loginLink = '#auth-view-page button[type=submit]'; // кнопка "Login"

const menuLinkDrafts = '[class^="sidebar--navContent"]';
// const menuLinkDrafts = '[class^="folder_link--draftsName"]'; // пункт меню "Drafts"
const menuLinkProjects = '[class^="folder_link--folderName"]'; // проект в левой колонке
const folderNameInFile = '[class^="design_toolbelt--toolbeltWrapper"]'; // кнопки,
const quickActionsInput = '[class^="search--searchInput"]'; // Окно быстрых действий
const recentFilesSelector = '[class^=tiles_view--tiles] a:not([draggable])'; // Макеты в списке Recent' файлов
const savePartialButton = '[class^="visual_bell--button"]'; // кнопка частичной загрузки

module.exports = {
  menuLinkDrafts,
  menuLinkProjects,
  authBlock,
  authFieldLogin,
  authFieldPassword,
  loginLink,
  folderNameInFile,
  quickActionsInput,
  recentFilesSelector,
  savePartialButton,
};
