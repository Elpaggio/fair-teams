if [ ! -d ~/.history ];then
        mkdir -p ~/.history
fi
# History Options
# ###############

# Ignore some controlling instructions
# HISTIGNORE is a colon-delimited list of patterns which should be excluded.
# The '&' is a special pattern which suppresses duplicate entries.
export HISTIGNORE=$'[ \t]*:&:[fb]g:exit:history*'

# Whenever displaying the prompt, write the previous line to disk
export HISTFILESIZE=100000
export HISTSIZE=10000
export HISTFILE=~/.history/`date +%Y-%m`.hist
if [[ ! -e $HISTFILE ]]; then
        LASTHIST=~/.history/`ls -tr ~/.history/ | tail -1`
        if [[ -e $LASTHIST ]]; then
                tail -500 $LASTHIST > $HISTFILE
                # Write a divider to identify where the prior day's session history ends
                echo "##########################################################" >> $HISTFILE
        fi
fi
PROMPT_COMMAND="${PROMPT_COMMAND};history -n"