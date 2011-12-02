<?php
class Config{
	public static $BROWSERS = array(
	'safari'=>array('10.81.23.219', "C:\\Program Files\\Safari\\Safari.exe")
	);

	public static $DEBUG = false;

	public static $HISTORY_REPORT_PATH = '/report';

	public static function StopAll(){
		$hostarr = array();
		foreach (Config::$BROWSERS as $b=>$h){
			$host = $h[0];
			if(in_array($host, $hostar))
			continue;
			array_push($hostarr, $host);
			require_once 'lib/Staf.php';
			Staf::process_stop('', $host, true);
			Staf::process("free all");
		}
	}
	/**
	 * 源码路径配置，会在所有位置寻找源码
	 * @var ArrayIterator::String
	 */
	public static $SOURCE_PATH = array("../../../src/","../../../../tangram/src/",
		"../../../../Tangram-base/src/"
		);

		/**
		 * 覆盖率相关源码所在路径，如果路径中没有找到会回到$SOURCH_PATH中查找
		 * @var string
		 */
		public static $COVERAGE_PATH = "../../../test/coverage/";
}
?>