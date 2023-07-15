from flask import Flask, request

app = Flask(__name__)

@app.route('/command', methods=['POST'])
def handle_command():
    command = request.form.get('command', '')
    # Process the command and perform the necessary actions
    if "list files" in command:
        # Code to list the files
        response = "Here are the files in the current directory:\n" + ', '.join(file_list)
    elif "open file" in command:
        # Code to open the file
        response = f"Opening file {file_name}"
    else:
        response = "Invalid command"

    return response

if __name__ == '__main__':
    app.run()
