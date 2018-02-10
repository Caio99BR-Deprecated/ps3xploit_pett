// PS3 Default Messages [Russian]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @ErikPshat
		

var msg_select_vsh_type="Использовать CEX?\n\При выборе НЕТ будут использоваться смещения DEX";
		
var msg_detected_fw_1="Обнаружена FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Поддержка ВСЕХ моделей и 4.xx прошивок";

var compat_msg_wrong_fw1="Ваша версия PS3 не совместима! Текущая версия вашей FW ";
var compat_msg_wrong_fw2=", которая несовместима с PS3Xploit. Все функции отключены";
var compat_msg_success1="Поздравляем! Мы обнаружили, что у вашей PlayStation 3 подходящая прошивка ";
var compat_msg_success2=", которая совместима с PS3Xploit! Пользуйтесь!";

var msg_option_not_available="Этот параметр пока недоступен!";

// Settings
var msg_settings_load="Это экспериментально и загружает настройки из куки!";
var msg_settings_save="Это экспериментально и сохраняет настройки в куки!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Возвращённое значение MinVer загружено в память!\n\nНажмите снова кнопку «Выполнить» для чтения и отображения!";
var msg_minver_start="Ваша минимальная версия  понижения ";
var msg_minver_mid=" является ";
var msg_minver_end=" совместимой с CFW в данное время!";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="Возвращённые значения CELL/RSX температуры загружены в память!\n\nНажмите снова кнопку «Выполнить» для чтения и отображения!";
var msg_temps_cell="CELL температура: ";
var msg_temps_rsx="\n\nRSX температура: ";
var msg_temps_celcius=" по Цельсию";

// MemDump
var msg_memdump_warning="Предупреждение!\n\nЭтот тест зависнет, если во время процесса сброса будет удалена нераспределенная область памяти!\n\nВы все равно получите валидный дамп, вплоть до момента сбоя!";
var msg_memdump_idps_vsh="Только 4.66/4.81/4.82 поддерживаются на данный момент для дампа IDPS напрямую из VSH памяти!\n\nИзвлечение IDPS из памяти основано различными методами.\n\nВсе остальные версии прошивок просто сбросят всё за 0 сек.";

// Warnings
var msg_fd_close_warning="Дескрипторы файлов в настоящее время не закрываются автоматически!";
var msg_remove_dir_warning="Предупреждение!\n\nБудьте внимательны при использовании этого системного вызова.\n\nВы можете удалить необходимый каталог и переустановить прошивку!";
var msg_warning_write_protection="Защита от записи отключена!\n\nДействуйте с осторожностью!!!!";

var msg_cobra_only="ВНИМАНИЕ!\n\nЭто работает ТОЛЬКО с включённой COBRA на CFW!";

var msg_mount_test="** В ФАЗЕ ТЕСТИРОВАНИЯ **!\n\nЭто будет смонтировано в /dev_hdd1/\n\nПосле монтирования вы можете перезапустить браузер и использовать цепочку 'Чтение/Запись файла' для дампа из раздела /dev_hdd1/ в пункт назначения!";

// File Operations
var msg_default_size="Используется размер по умолчанию 0x140";
var msg_new_size="Новый размер файла: 0x";
var msg_destination_path_incorrect="Путь назначения некорректен!\n\nОн должен быть выставлен перед изменением Title ID.";

// Trigger Messages
var trigger_msg="Запуск эксплоита...";
var trigger_msg2="Триггер: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Поиск смещений в памяти! Пожалуйста подождите... <br>Если вы не терпеливы, закройте браузер и повторите попытку через 60-90 секунд!</b></h3>";
var msg_verify_offsets="<h3><b>Проверка смещений в памяти! Пожалуйста подождите... <br>Не закрывайте браузер!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color=%a210003%22>Не найдены все смещения!</font><font color=%227700DA%22> Если поиск снова не срабатывает, настройте параметры поиска или перезапустите браузер!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color=%a210003%22>Не найдены все смещения!</font><font color=%227700DA%22> Последняя повторная попытка! Пожалуйста перезагрузите браузер!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color=%a210003%22>Не проверены все смещения!</font><font color=%227700DA%22> Если проверка снова не срабатывает, перезапустите браузер!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color=%a210003%22>Не проверены все смещения!</font><font color=%227700DA%22> Последняя повторная попытка! Пожалуйста перезагрузите браузер!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color=%22386E38%22>УСПЕШНО!</font><font color=%227700DA%22> <br>Теперь вы можете выполнить вашу цепочку!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color=%22386E38%22>Цепочка выполнена успешно!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color=%22386E38%22>Нажмите кнопку «Выполнить» еще раз!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color=%22386E38%22>PSID сдамплен успешно!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color=%22386E38%22>IDPS сдамплен успешно!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color=%22386E38%22>Память сдамплена успешно!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color=%22386E38%22>Успешно передан источник в пункт назначения!</font></b></h3>";
var success_mount_device="<h3><b><font color=%22386E38%22>Успешно смонтрирован /dev_hdd1/! Перезапустите браузер и запустите 'R/W File Chain' для дампа.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>Информация о браузере системы PS3: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Это не система PlayStation! Все функции отключены";
var compat_msg_devs="Это только для разработчиков!\n\nCEX смещения необходимо будет добавить вручную в файл /js/chains/offsets.js, на основе ваших смещений DEX, используемых для каждой цепочки.";
var experimental="Задайте свою 'Домашнюю страницу' на эту страницу!\n\nИСПОЛЬЗОВАТЬ НА СВОЙ СТРАХ И РИСК!\nЗдесь могут быть ошибки, и некоторые вещи могут не работать!\n\nПоддерживаются все модели 4.xx CEX и 4.81 DEX";

// Other Messages
var msg_prerelease="ЭТО ПРЕДВАРИТЕЛЬНЫЙ РЕЛИЗ!\n\nПОДДЕРЖКА СТАРЫХ ПРОШИВОК ТОЛЬКО ЧАСТИЧНО ВЫПОЛНЕНА!\n\n4.81/4.82 ТОЛЬКО В СЛЕДУЮЩИХ РЕЛИЗАХ!";
var msg_anti_piracy="ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ\n\nМы НЕ предусматриваем и не одобряем ПИРАТСТВО в любом виде!\n\nИспользуя этот учебник и нажав «ДА», вы соглашаетесь использовать его ТОЛЬКО для образовательных целей!";
var msg_anti_piracy_edat="АНТИ-ПИРАТСКИЙ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ!\n\nЭтот вариант предназначен только для целей тестирования и разработки и не должен подвергаться насилию!\n\nНажимая «ДА», вы соглашаетесь использовать это ТОЛЬКО в целях сохранения флоры и фауны! Поклянитесь, что, при выполнении последующих действий, не пострадает ни одно дерево и не погибнет ни одно животное!";

var msg_thread_name="Hello_From_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="Значение кода возврата устройства загружено в память!\n\nНажмите снова кнопку «Выполнить», чтобы прочитать и отобразить!";
var msg_get_device_info1="Код возврата устройства: ";
var msg_get_device_info2="\n\nИспользуйте это для цепочки sys_storage_report_devices";

// Debugging

var msg_debug_placeholder="Ленивый XP +1";

var msg_stackframe_check="Это проверит стековый фрейм по умолчанию для выявления возможных проблем.\n\nЕсли произошёл крах системы или не отображается сообщение об успешном завершении, то значит возникла проблема!";

// String Matching
var verify_fail="<font color=%a210003%22>НЕУДАЧА: Строки не совпадают с памятью!</font>";
var verify_success="<font color=%222a1003%22>УСПЕШНО: Строки совпадают с памятью!</font>";
var verify_skip="<font color=%222a1003%22>УСПЕШНО: Не проверять строки в памяти!</font>";

var msg_search_flash_type_start="Поиск настроек параметров для ";
var msg_search_flash_type_end=" Тип памяти!";

var msg_check_memory="Проверка памяти: ";
var msg_chk_mem_arg_error="Ошибка аргуметнов в функции проверки памяти! размер=0x";
var msg_malformed_html="Неверный формат HTML!";
var msg_string_located=" найден в позиции: 0x";
var msg_string_not_located="не может находиться в диапазоне";

// Found Offsets
var msg_found_offsets="Найдены смещения: ";
var msg_verified_offsets="Проверенные смещения: ";
var offset_find_success="успешно";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";


var msg_page_args_not_set="Аргументы страницы не заданы!\n\nНажмите кнопку «Установить аргументы» и повторите попытку!";
var msg_no_chain_selected="Не выбрана цепочка ROP в хекс\n\nИспользуйте раскрывающийся список для выбора";
var msg_media_not_supported="Этот выбор Медиа еще не реализован!";
var msg_cannot_continue="Не удаётся продолжить... Возвращаемся!";

var msg_invalid_title_id="ВНИМАНИЕ!\n\nНе верный размер введённого Title ID!\n\Используется ID по умолчанию.";
