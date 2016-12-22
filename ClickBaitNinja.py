import sys
import mechanize

br = mechanize.Browser();

if __name__ == '__main__':
	link = sys.argv[1];
	print sys.argv[1];
	response = br.open(link);
	print response.get_data();