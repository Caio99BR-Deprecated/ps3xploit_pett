// PS3 Default Messages [Italian]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @neno20115


var msg_select_vsh_type="Use CEX?\n\nSelecting NO will use DEX offsets";
		
var msg_detected_fw_1="Rileva FW: ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | Supporta TUTTI i Modelli e Firmware 4.xx";

var compat_msg_wrong_fw1="La tua PS3 non e' una versione compatibile! La versione FW attuale e' ";
var compat_msg_wrong_fw2=", la quale non e' compatibile con PS3Xploit. Tutte le funzionalita' sono state disattivate";
var compat_msg_success1="Congratulazioni! Abbiamo rilevato che la tua PS3 sta eseguendo il FW ";
var compat_msg_success2=", il quale e' compatibile con PS3Xploit! Enjoy!";

var msg_option_not_available="This Option Is Not Available Yet!";

// Settings
var msg_settings_load="Questo e' sperimentale e carica impostazioni da cookie!";
var msg_settings_save="Questo e' sperimentale e salva impostazioni nei cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="Valore di ritorno di MinVer caricato in Memoria!\n\nPremi Esegui un'altra volta per leggerlo e visualizzarlo!";
var msg_minver_start="La tua Versione minima di Downgrade e' ";
var msg_minver_mid=" ed e' ";
var msg_minver_end=" compatible with CFW at this time! compatibile con i CFW al momento";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="alore di ritorno di CELL/RSX Temp caricato in Memoria!\n\nPremi Esegui un'altra volta per leggerlo e visualizzarlo!";
var msg_temps_cell="Temperatura CELL: ";
var msg_temps_rsx="\n\nTemperatura RSX: ";
var msg_temps_celcius=" Celsius";

// MemDump
var msg_memdump_warning="Attenzione!\n\nQuesto test si blocchera' se sara' selezionata un'area di memoria non allocata durante il processo di Dump!\n\nIl Dump precedente al crash sara' comunque valido!";
var msg_memdump_idps_vsh="Solo 4.66/4.81/4.82 e' correntemente supportato per effettuare il Dump IDPS direttamente dalla memoria VSH!\n\nFlash Extract IDPS Based Chain e'differente.\n\nTutti gli altri firmware probabilmente effettuerebbero un dump con tutti 0.";

// Warnings
var msg_fd_close_warning="I descrittori dei file al momnento non sono chiusi automaticamente!";
var msg_remove_dir_warning="ATTENZIONE!\n\nPrestare Cautela usando questa chiamata di sistema!\n\nPotresti rimuovere una directory di sistema e dover reinstallare il FW!";
var msg_warning_write_protection="Protezione Scrittura Disabilitata!\n\nProcedi con CAUTELA!!!!";

var msg_cobra_only="ATTENZIONE!\n\nFunziona SOLO con COBRA abilitato su CFW!";

var msg_mount_test="** IN FASE DI TEST ** !\n\n/dev_hdd1/ verra' montato \n\nUna volta montato puoi riaprire il browser e usare la R/W File Chain per fare il DUMP dalla partizione /dev_hdd1/ alla destinazione";

// File Operations
var msg_default_size="Usando dimensione predefinita 0x140";
var msg_new_size="Nuova dimensione file: 0x";
var msg_destination_path_incorrect="Destination Path Is Incorrect!\n\nIt Must Be Set Before Changing Title ID.";

// Trigger Messages
var trigger_msg="Triggering exploit...";
var trigger_msg2="Trigger: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Ricerca di Offset In Memoria! Prego attendere.... <br>Se sei impaziente, chiudi il browser e riprova tra circa 60-90 secondi se non viene trovato nulla!</b></h3>";
var msg_verify_offsets="<h3><b>Verifying Offsets In Memory! Please Wait.... <br>DO NOT Close The Browser Yet!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><font color=%227700DA%22>Non trovati tutti gli Offset!</font><font color=%227700DA%22> Se la ricerca fallisce ancora, perfeziona le impostazioni di ricerca o RIAPRI il browser!</b></font></h3>";
var msg_string_search_fail_max="<h3><font color=%227700DA%22>Non trovati tutti gli Offset!</font><font color=%227700DA%22> Tentativi massimi raggiunti! RIAPRI il BROWSER!</b></font></h3>";

// Init Success
var msg_success_init="<h3><b><font color=%22386E38%22>SUCCESSO!</font><font color=%227700DA%22> <br>Ora puoi eseguire il CHAIN!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color=%22386E38%22>Chain eseguita correttamente!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color=%22386E38%22>Premi Esegui un altra volta!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color=%22386E38%22>PSID Dump eseguito!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color=%22386E38%22>IDPS Dump eseguito!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color=%22386E38%22>Dump memoria eseguito!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color=%22386E38%22>Trasferimento sorgente-destinazione completato!</font></b></h3>";
var success_mount_device="<h3><b><font color=%22386E38%22>/dev_hdd1 montato con successo! Riapri il Browser ed esegui la R/W File Chain per il DUMP</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 System Browser Info: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="Non sei su un sistema PlayStation! Tutte le funzionalita' sono state disabilitate!";
var compat_msg_devs="Solo per Sviluppatori!\n\nCEX offset e' richiesto di essere aggiunta al file /js/chains/offsets.js, in base agli offset DEX in uso in ogni chain.";
var experimental="Imposta la tua homepage su questa pagina!\n\nUSARE A PROPRIO RISCHIO E PERICOLO!\nCi possono essere alcuni bug o altro non funzionante!\n\nTutti i modelli con 4.xx e 4.81 DEX sono supportati";

// Other Messages
var msg_prerelease="QUESTA E' UNA VERSIONE PREVIEW PREMATURA!\n\nIL SUPPORTO SU FIRMWARE DATATI E' STATO IMPLEMENTATO SOLO IN PARTE!\n\nSOLO 4.81/4.82  PRIMA DELLA PROSSIMA RELEASE!";
var msg_anti_piracy="AVVERTIMENTO\n\nNon perdoniamo ne' approviamo qualsiasi tipo di PIRATERIA!\n\nUsando questo tutorial, e selezionando SI, accetti di usarlo SOLO per scopi didattici!";
var msg_anti_piracy_edat="ANTI-PIRACY DISCLAIMER!\n\nThis option is intended for testing and development purposes only, and should not be abused!\n\nBy clicking YES you agree to ONLY use this for titles that have been purchased!";

var msg_thread_name="Hello_From_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="Device Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_get_device_info1="Returned Device: ";
var msg_get_device_info2="\n\nUse This For sys_storage_report_devices Chain";

// Debugging

var msg_debug_placeholder="Lazy XP +1";

var msg_stackframe_check="This will check the default stackframe for problems.\n\nIf it crashes or does not display a success message, then there is an issue!";

// String Matching
var verify_fail="<font color=%227700DA%22>FALLITO: Le stringhe non corrispondono in memoria!</font>";
var verify_success="<font color=%222a1003%22>SUCCESSO: Le stringhe corrispondono in memoria!</font>";
var verify_skip="<font color=%222a1003%22>SUCCESSO: SENZA VERIFICA DELLE STRINGHE IN MEMORIA!</font>";

var msg_search_flash_type_start="Ricerca Params Set For ";
var msg_search_flash_type_end=" Flash Type!";

var msg_check_memory="checkMemory: ";
var msg_chk_mem_arg_error="Errore argomento funzione checkMemory! size=0x";
var msg_malformed_html="HTML buggato!";
var msg_string_located=" Trovato all'offset: 0x";
var msg_string_not_located="Impossibile localizzarlo nel range";

// Found Offsets
var msg_found_offsets="Trovati Offset: ";
var offset_find_success="successo";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";


var msg_page_args_not_set="Argomento Pagina non Impostato!\n\nClicca il pulsante Imposta Argomenti e Riprova!";
var msg_no_chain_selected="Nessuna ROP Chain Hex Selezionatan\nUsa la tendina per selezionarne una";
var msg_media_not_supported="Questo media non e' al momento implementato!";
var msg_cannot_continue="Impossibile continuare, uscendo....!";

var msg_invalid_title_id="ALERT!\n\nThe Title ID Entered Has An Invalid Size!\n\nUsing Default ID.";

